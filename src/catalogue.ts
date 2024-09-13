import { Log } from './decorators/Logger';
import { DebugLevels } from './utils/Debugger';
import { QorusAppsCatalogue } from './ActionsCatalogue';
QorusAppsCatalogue.registerApps();
// Types are now ANY because they will come from '@qoretechnologies/qorus-actions-catalogue' when it's ready
export type TApp = Record<string, any>;
export type TAction = Record<string, any>;

export interface IQoreApi {
  registerApp: (app: TApp) => void;
  registerAction: (action: TAction) => void;
}

class ActionsCatalogue {
  @Log('Initializing the Actions Catalogue', DebugLevels.Info)
  registerAppActions(qoreApi: IQoreApi) {
    Object.keys(QorusAppsCatalogue.apps).forEach((appName) => {
      const { actions, ...app } = QorusAppsCatalogue.apps[appName];
      qoreApi.registerApp(app);
      actions.forEach((action: any) => {
        qoreApi.registerAction(action);
      });
    });
  }
}

export const actionsCatalogue = new ActionsCatalogue();
