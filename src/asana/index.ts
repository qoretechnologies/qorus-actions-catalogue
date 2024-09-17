import { mapActionsToApp } from '../global/helpers';
import { IQoreAppWithActions } from '../global/models/qore';
import L from '../i18n/i18n-node';
import { Locales } from '../i18n/i18n-types';
import * as asanaActions from './actions';
import { ASANA_APP_NAME } from './constants';
/*
 * Returns the app object with all the actions ready to use, using translations
 * @param locale - the locale
 * @returns IQoreAppWithActions
 */
export default (locale: Locales) =>
  ({
    display_name: L[locale].apps.Asana.displayName(),
    short_desc: L[locale].apps.Asana.shortDesc(),
    name: ASANA_APP_NAME,
    actions: mapActionsToApp(ASANA_APP_NAME, asanaActions, locale),
    desc: L[locale].apps.Asana.longDesc(),
    logo:
      'PHN2ZyBpZD0ibG9nb3NhbmR0eXBlc19jb20iIGRhdGEtbmFtZT0ibG9nb3NhbmR0eXBlcyBjb20iIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy' +
      '8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIxMjciIGhlaWdodD0iMTI3IiB2aWV3' +
      'Qm94PSIwIDAgMTUwIDE1MCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOm5vbmU7fS5jbHMtMntmaWxsLXJ1bGU6ZXZlbm9kZDtmaWxsOnVybC' +
      'gjcmFkaWFsLWdyYWRpZW50KTt9PC9zdHlsZT48cmFkaWFsR3JhZGllbnQgaWQ9InJhZGlhbC1ncmFkaWVudCIgY3g9Ii0yMjIuOTUiIGN5PSI1' +
      'MTcuOTEiIHI9IjMuMDEiIGdyYWRpZW50VHJhbnNmb3JtPSJtYXRyaXgoLTE4Ljc4LCAxMS4yNSwgMTEuNDMsIDE5LjA3LCAtMTAwMzAuNjYsIC' +
      '03Mjg5LjE5KSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iI2ZmYjkwMCIvPjxz' +
      'dG9wIG9mZnNldD0iMC43NSIgc3RvcC1jb2xvcj0iI2ZhNWM4NiIvPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iI2Y5NTM1MyIvPjwvcm' +
      'FkaWFsR3JhZGllbnQ+PC9kZWZzPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTAsLjJIMTUwdjE1MEgwWiIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUo' +
      'MCAtMC4yKSIvPjxwYXRoIGlkPSJkb3RzIiBjbGFzcz0iY2xzLTIiIGQ9Ik0xMDIuNjgsNDMuNTZBMjcuODQsMjcuODQsMCwxLDEsNzQuODQsMT' +
      'UuNzRhMjcuODMsMjcuODMsMCwwLDEsMjcuODQsMjcuODJabS02NCwzNC43N2EyNy44MiwyNy44MiwwLDEsMCwyNy44NCwyNy44MUEyNy44Miwy' +
      'Ny44MiwwLDAsMCwzOC42OCw3OC4zM1ptNzIuMzIsMGEyNy44MiwyNy44MiwwLDEsMCwyNy44NCwyNy44MUEyNy44MiwyNy44MiwwLDAsMCwxMT' +
      'EsNzguMzNaIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIC0wLjIpIi8+PC9zdmc+',
    logo_file_name: 'asana-logo.svg',
    logo_mime_type: 'image/svg+xml',
    swagger: 'schemas/asana.swagger.yaml',
    rest: {
      url: 'https://app.asana.com',
      data: 'json',
      oauth2_grant_type: 'authorization_code',
      oauth2_auth_url: 'https://api.notion.com/v1/oauth/authorize',
      oauth2_token_url: 'https://api.notion.com/v1/oauth/token',
      oauth2_scopes: ['read', 'write'],
      ping_method: 'GET',
      ping_path: '/v1/users/me',
    },
  }) satisfies IQoreAppWithActions;
