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
    // This is a white Zendesk styled "Z" logo used in accordance with Zendesk's Brand / Logo Guidelines
    // https://web-assets.zendesk.com/pdf/Zendesk-logo-guidelines-legal-04-22-22.pdf
    logo: 'PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjwhRE9DVFlQRSBzdmcgUFVCTElDICIt' +
        'Ly9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+Cjxzdm' +
        'cgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgdmlld0JveD0iMCAwIDgwMCA4MDAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93' +
        'd3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeG1sOnNwYWNlPSJwcmVzZX' +
        'J2ZSIgeG1sbnM6c2VyaWY9Imh0dHA6Ly93d3cuc2VyaWYuY29tLyIgc3R5bGU9ImZpbGwtcnVsZTpldmVub2RkO2NsaXAtcnVsZTpldmVu' +
        'b2RkO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoyOyI+CiAgICA8cGF0aCBkPSJNMzczLjg1Nyw2NTkuODU3TD' +
        'U3LjE0Myw2NTkuODU3TDM3My44NTcsMjc3LjQ4NkwzNzMuODU3LDY1OS44NTdaTTc0Mi44NTcsNjU5Ljg1N0w0MjYuMTQzLDY1OS44NTdD' +
        'NDI2LjE0Myw1NzIuMzQzIDQ5Ni45NzEsNTAxLjQ4NiA1ODQuNTE0LDUwMS40ODZDNjcyLjAyOSw1MDEuNDg2IDc0Mi44NTcsNTcyLjQgNz' +
        'QyLjg1Nyw2NTkuODU3Wk00MjYuMTQzLDUyMi42TDQyNi4xNDMsMTQwLjE0M0w3NDIuODU3LDE0MC4xNDNMNDI2LjE0Myw1MjIuNlpNMzcz' +
        'Ljg1NywxNDAuMTQzQzM3My44NTcsMjI3LjYgMzAyLjk3MSwyOTguNTQzIDIxNS40ODYsMjk4LjU0M0MxMjguMDU3LDI5OC41NDMgNTcuMT' +
        'QzLDIyNy42NTcgNTcuMTQzLDE0MC4yTDM3My44NTcsMTQwLjJMMzczLjg1NywxNDAuMTQzWiIgc3R5bGU9ImZpbGw6d2hpdGU7ZmlsbC1y' +
        'dWxlOm5vbnplcm87Ii8+Cjwvc3ZnPgo=',
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
