import { DEFAULT_LOGO } from '../global/constants';
import { mapActionsToApp } from '../global/helpers';
import {
  GetConnectionOptionDefinitionFromQoreType,
  IQoreAppWithActions,
  TQoreType,
} from '../global/models/qore';
import { L } from '../i18n/i18n-node';
import { Locales } from '../i18n/i18n-types';
import * as zendeskActions from './actions';

export interface IQoreConnectionOptions {
  [key: string]: GetConnectionOptionDefinitionFromQoreType<TQoreType>;
}

const options = {
  subdomain: {
    display_name: 'Subdomain',
    short_desc: 'The subdomain for the URL',
    desc: 'The subdomain for the URL',
    type: 'string',
  },
} satisfies IQoreConnectionOptions;

/*
 * Returns the app object with all the actions ready to use, using translations
 * @param locale - the locale
 * @returns IQoreAppWithActions
 */
export default (locale: Locales) =>
  ({
    display_name: L[locale].apps.zendesk.displayName(),
    short_desc: L[locale].apps.zendesk.shortDesc(),
    name: 'zendesk',
    actions: mapActionsToApp('zendesk', zendeskActions, locale),
    desc: L[locale].apps.zendesk.longDesc(),
    logo: DEFAULT_LOGO,
    logo_file_name: 'zendesk.svg',
    logo_mime_type: 'image/svg+xml',
    rest: {
      url: `tsrest-zendesk://{{subdomain}}.zendesk.com`,
      data: 'json',
      oauth2_client_secret: process.env.ZENDESK_CLIENT_SECRET,
      oauth2_grant_type: 'authorization_code',
      oauth2_client_id: 'qorus_integration',
      oauth2_auth_url: 'https://{{subdomain}}.zendesk.com/oauth/authorizations/new',
      oauth2_token_url: 'https://{{subdomain}}.zendesk.com/oauth/tokens',
    },
    rest_modifiers: {
      options,
      required_options: 'subdomain',
      url_template_options: ['subdomain'],
    },
  }) satisfies IQoreAppWithActions<typeof options>;
