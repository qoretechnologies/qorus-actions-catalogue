import {
  ActionContext,
  ActionRunner,
  InputPropertyMap,
  Piece,
  StaticPropsValue,
} from 'core/framework';
import { InputProperty } from 'core/framework/property/input';
import { normalizeName } from 'global/helpers';
import {
  IQoreAppActionOption,
  IQoreAppActionWithFunction,
  IQoreAppWithActions,
  TQoreAppActionFunction,
  TQoreAppActionFunctionOptions,
  TQoreApps,
} from 'global/models/qore';
import { commonActionContext, piecePropTypeToQoreOptionTypeIndex } from './common/constants';
import * as pieces from './index';
import { TMapPieceActionToAppActionOptions } from './common/models/pieces-catalogue';
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
      display_name: piece.displayName,
      short_desc: piece.description,
      desc: piece.description,
      logo: piece.logoUrl,
    };
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
      response_type: {},
    };
  }

  private mapPieceActionToAppActionFunction(
    runFunction: ActionRunner<any, any>
  ): TQoreAppActionFunction {
    return (options: TQoreAppActionFunctionOptions): Promise<any> => {
      const context = {
        propsValue: options.props satisfies StaticPropsValue<InputPropertyMap>,
        auth: options.auth,
        ...commonActionContext,
      } satisfies ActionContext;

      return runFunction(context);
    };
  }

  private mapActionPropsToAppActionOptions(
    props: Record<string, InputProperty>
  ): Record<string, IQoreAppActionOption> {
    const options: Record<string, IQoreAppActionOption> = {};

    for (const key in props) {
      if (props.hasOwnProperty(key)) {
        const value = props[key];
        options[key] = this.mapActionPropToAppActionOption(value);
      }
    }

    return options;
  }

  private mapActionPropToAppActionOption(prop: InputProperty): IQoreAppActionOption {
    return {
      display_name: prop.displayName,
      short_desc: prop.description,
      desc: prop.description,
      type: piecePropTypeToQoreOptionTypeIndex[prop.type],
      required: prop.required,
      default_value: prop.defaultValue,
    };
  }
}

export const PiecesAppCatalogue = new _PiecesAppCatalogue();
