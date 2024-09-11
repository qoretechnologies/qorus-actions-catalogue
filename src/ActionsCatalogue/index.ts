import { Locales } from 'i18n/i18n-types';
import { TQoreApps } from '../global/models/qore';
import { PiecesAppCatalogue } from '../pieces/piecesCatalogue';
import zendesk from '../zendesk';
PiecesAppCatalogue.registerApps();

class _QorusAppsCatalogue {
  public readonly apps: TQoreApps = {};

  constructor(public locale: Locales = 'en') {}

  // Register all the apps here
  public registerApps() {
    Object.keys(PiecesAppCatalogue.apps).forEach((appName) => {
      this.apps[appName] = PiecesAppCatalogue.apps[appName];
    });
    this.apps['zendesk'] = zendesk(this.locale);
  }

  public getOauth2ClientSecret(appName: string): string {
    return process.env[`${appName.toUpperCase()}_CLIENT_SECRET`] ?? 'auto';
  }
}

export const QorusAppsCatalogue = new _QorusAppsCatalogue();
