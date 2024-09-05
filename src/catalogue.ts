// This will be replaced by the real implementation
import { QorusAppsCatalogue } from './ActionsCatalogue';
import { Log } from './decorators/Logger';
import { IQoreApp, IQoreAppActionWithFunction, IQoreAppWithActions } from './global/models/qore';
import { DebugLevels } from './utils/Debugger';

export interface IQoreApi {
  registerApp: (app: IQoreApp) => void;
  registerAction: (action: IQoreAppActionWithFunction) => void;
}

class ActionsCatalogue {
  @Log('Initializing the Actions Catalogue', DebugLevels.Info)
  registerAppActions(api: IQoreApi) {
    // Initialize the Qorus Apps Catalogue, this will load all the apps
    QorusAppsCatalogue.registerApps();

    // Go through all the apps and register them
    Object.keys(QorusAppsCatalogue.apps).forEach((appName) => {
      const { actions, ...app }: IQoreAppWithActions = QorusAppsCatalogue.apps[appName];

      // Register the app
      api.registerApp(app);

      // Register the actions
      actions.forEach((action) => {
        api.registerAction(action);
      });
    });
  }
}

export const actionsCatalogue = new ActionsCatalogue();
