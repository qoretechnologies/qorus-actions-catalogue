import { TQoreApps } from 'global/models/qore';
import { Locales } from 'i18n/i18n-types';
import zendesk from './zendesk';
import { PiecesAppCatalogue } from './pieces/piecesCatalogue';
PiecesAppCatalogue.registerApps();

class _QorusAppsCatalogue {
  public readonly apps: TQoreApps = PiecesAppCatalogue.apps;

  constructor(public locale: Locales = 'en') {}

  // Register all the apps here
  public registerApps() {
    this.apps['zendesk'] = zendesk(this.locale);
  }
}

export const QorusAppsCatalogue = new _QorusAppsCatalogue();
