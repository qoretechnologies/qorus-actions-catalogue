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
import { InputProperty } from '../core/framework/property/input';
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
  IQoreRestConnectionConfig,
} from 'global/models/qore';
import { DynamicDropdownOptions } from 'core/framework/property/input/dropdown/dropdown-prop';
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
      // logo: piece.logoUrl,
      logo: 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdmcgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDUyIDYzIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zOnNlcmlmPSJodHRwOi8vd3d3LnNlcmlmLmNvbS8iIHN0eWxlPSJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjsiPgogICAgPGcgdHJhbnNmb3JtPSJtYXRyaXgoMSwwLDAsMSwtMTYuNjUsLTIzLjAxNzIpIj4KICAgICAgICA8cGF0aCBkPSJNNjguMzYzLDYzLjk3M0w2OC4zNjMsNDAuMTA5QzY4LjM2Myw0MC4xMDkgNjguMzYzLDM3LjExMyA2NS43NjgsMzUuNjE1TDQ1LjEwMiwyMy42ODNDNDUuMTAyLDIzLjY4MyA0Mi41MDcsMjIuMTg1IDM5LjkxMiwyMy42ODNMMTkuMjQ1LDM1LjYxNUMxOS4yNDUsMzUuNjE1IDE2LjY1LDM3LjExMyAxNi42NSw0MC4xMDlMMTYuNjUsNjMuOTczQzE2LjY1LDYzLjk3MyAxNi42NSw2Ni45NjkgMTkuMjQ1LDY4LjQ2N0w0Ny44MzksODQuODIyQzQ3LjgzOSw4NC44MjIgNTAuNDM0LDg2LjM2OCA1My4wMjksODQuODdMNjQuNjUyLDc4LjExMkw0Mi41Miw2NS41MDNMNDIuNTA3LDY1LjUxMUwzMC44NDMsNTguNzc2TDMwLjg0Myw0NS4zMDdMNDIuNTA3LDM4LjU3M0w1NC4xNzEsNDUuMzA3TDU0LjE3MSw1OC43NzZMNDUuMjEzLDYzLjk0OEw1OS41NjUsNzIuMDVMNjUuNzY4LDY4LjQ2OUM2NS43NjksNjguNDY4IDY4LjM2Myw2Ni45NyA2OC4zNjMsNjMuOTczIiBzdHlsZT0iZmlsbDpyZ2IoNjQsNjQsNjQpO2ZpbGwtcnVsZTpub256ZXJvOyIvPgogICAgPC9nPgo8L3N2Zz4K',
      logo_file_name: 'test.svg',
      logo_mime_type: 'image/svg+xml',
    };
  }

  private mapPieceAuthToAppRest(auth: PieceAuthProperty): IQoreRestConnectionConfig {
    if (auth.type === PropertyType.OAUTH2) {
      return {
        data: 'auto',
        oauth2_grant_type: 'authorization_code',
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
      api_function: this.mapPieceActionToAppActionFunction(action.run),
      options: this.mapActionPropsToAppActionOptions(action.props),
      ...(action.responseType && { response_type: action.responseType }),
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
        auth: { access_token: context.conn_opts.token, ...context.opts },
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
    const description = prop.description || 'No description';
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
      short_desc: description,
      desc: description,
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
      const auth = { access_token: context.conn_opts.token };
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
