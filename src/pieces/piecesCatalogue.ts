import {
  ActionContext,
  ActionRunner,
  DropdownState,
  InputPropertyMap,
  Piece,
  PieceAuthProperty,
  PropertyType,
  StaticPropsValue,
} from 'core/framework';
import { InputProperty } from 'core/framework/property/input';
import { normalizeName } from 'global/helpers';
import {
  IQoreAllowedValue,
  IQoreAppActionOption,
  IQoreAppActionWithFunction,
  IQoreAppWithActions,
  TQoreAppActionFunction,
  TQoreAppActionFunctionContext,
  TQoreApps,
  TQoreGetAllowedValuesFunction,
  TQoreRestConnectionConfig,
} from 'global/models/qore';
import { DynamicDropdownOptions } from '../core/framework/property/input/dropdown/dropdown-prop';
import { commonActionContext, piecePropTypeToQoreOptionTypeIndex } from './common/constants';
import { TMapPieceActionToAppActionOptions } from './common/models/pieces-catalogue';
import * as pieces from './index';
pieces satisfies Record<string, Piece>;

class _PiecesAppCatalogue {
  public readonly apps: TQoreApps = {};

  public registerApps(): void {
    const qoreApps = Object.entries(pieces).map(([pieceName, piece]) =>
      this.mapPieceToApp(pieceName, piece)
    );
    qoreApps.forEach((app) => (this.apps[app.name] = app));
  }

  private mapPieceToApp(pieceName: string, piece: Piece): IQoreAppWithActions {
    const appName = normalizeName(pieceName);

    return {
      name: appName,
      actions: Object.entries(piece.actions()).map(([actionName, action]) =>
        this.mapPieceActionToAppAction({ appName, actionName, action })
      ),
      rest: this.mapPieceAuthToAppRest(piece.auth),
      display_name: piece.displayName,
      short_desc: piece.description,
      desc: piece.description,
      logo: piece.logoUrl,
    };
  }

  private mapPieceAuthToAppRest(auth: PieceAuthProperty): TQoreRestConnectionConfig {
    if (auth.type === PropertyType.OAUTH2) {
      return {
        url: auth.authUrl,
        oauth2_auth_url: auth.authUrl,
        oauth2_token_url: auth.tokenUrl,
        oauth2_scopes: auth.scope,
      };
    }
  }

  private mapPieceActionToAppAction({
    appName,
    actionName,
    action,
  }: TMapPieceActionToAppActionOptions): IQoreAppActionWithFunction {
    const formattedActionName = normalizeName(actionName);

    return {
      app: appName,
      action_code: 2,
      display_name: action.displayName,
      short_desc: action.description,
      desc: action.description,
      action: formattedActionName,
      app_function: this.mapPieceActionToAppActionFunction(action.run),
      options: this.mapActionPropsToAppActionOptions(action.props),
      response_type: action.responseType,
    };
  }

  private mapPieceActionToAppActionFunction(
    runFunction: ActionRunner<any, any>
  ): TQoreAppActionFunction {
    return (
      obj: Record<string, any>,
      _options: Record<string, any>,
      context: TQoreAppActionFunctionContext
    ): Promise<any> => {
      const actionContext = {
        propsValue: obj satisfies StaticPropsValue<InputPropertyMap>,
        auth: { access_token: context.conn_options.token, ...context.opts },
        ...commonActionContext,
      } satisfies ActionContext;

      return runFunction(actionContext);
    };
  }

  private mapActionPropsToAppActionOptions(
    props: Record<string, InputProperty>
  ): Record<string, IQoreAppActionOption> {
    const options: Record<string, IQoreAppActionOption> = {};

    for (const key in props) {
      if (key === 'info') {
        // Add info prop to a different field in action
        continue;
      }
      if (props.hasOwnProperty(key)) {
        const value = props[key];
        options[key] = this.mapActionPropToAppActionOption(value);
      }
    }

    return options;
  }

  private mapActionPropToAppActionOption(prop: InputProperty): IQoreAppActionOption {
    let allowed_values: IQoreAllowedValue[] | undefined = undefined;
    let get_allowed_values: TQoreGetAllowedValuesFunction | undefined = undefined;

    if ('options' in prop) {
      allowed_values = this.mapPieceAllowedValuesToQoreAllowedValues(
        prop.options as DropdownState<any>
      );
      get_allowed_values = this.mapPieceGetOptionsToQoreGetAllowedValues(
        prop.options as DynamicDropdownOptions<any>
      );
    }

    return {
      display_name: prop.displayName,
      short_desc: prop.description,
      desc: prop.description,
      type: piecePropTypeToQoreOptionTypeIndex[prop.type],
      get_allowed_values,
      allowed_values,
      required: prop.required,
      default_value: prop.defaultValue,
    };
  }

  private mapPieceAllowedValuesToQoreAllowedValues(
    options: DropdownState<any>
  ): IQoreAllowedValue[] {
    if ('options' in options) {
      return options.options.map((option) => ({
        value: option.value,
        desc: option.label,
        short_desc: option.label,
        display_name: option.label,
      }));
    }
  }

  private mapPieceGetOptionsToQoreGetAllowedValues(
    getOptions: DynamicDropdownOptions<any>
  ): TQoreGetAllowedValuesFunction {
    return async (context: TQoreAppActionFunctionContext): Promise<IQoreAllowedValue[]> => {
      const auth = { access_token: context.conn_options.token };
      const options = await getOptions({ auth });

      return options.options.map((option) => ({
        value: option.value,
        desc: option.label,
        short_desc: option.label,
        display_name: option.label,
      }));
    };
  }
}

export const PiecesAppCatalogue = new _PiecesAppCatalogue();
