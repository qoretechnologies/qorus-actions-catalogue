import { IQoreAppActionWithFunction, TQorePartialActionWithFunction } from 'global/models/qore';
import L from 'i18n/i18n-node';
import { Locales, Translation } from 'i18n/i18n-types';

/*
 * This function maps the actions to the app and adds missing metadata using translations
 * @param app - the name of the app
 * @param actions - the actions to map
 * @param locale - the locale
 * @returns IQoreAppActionWithFunction[]
 */
export const mapActionsToApp = (
  app: keyof Translation['apps'],
  actions: Record<string, TQorePartialActionWithFunction>,
  locale: Locales
): IQoreAppActionWithFunction[] => {
  return Object.entries(actions).map(([actionName, action]) => ({
    ...action,
    // @ts-expect-error no idea whats going on here, will fix later
    display_name: L[locale].apps[app].actions[actionName as unknown].displayName(),
    // @ts-expect-error no idea whats going on here, will fix later
    short_desc: L[locale].apps[app].actions[actionName as unknown].shortDesc(),
    // @ts-expect-error no idea whats going on here, will fix later
    long_desc: L[locale].apps[app].actions[actionName as unknown].longDesc(),
    app,
    action_code: 2,
  }));
};

/*
 * This function normalizes the given app name by
 * converting it to lowercase,
 * replacing spaces with underscores,
 * and removing any non-alphanumeric characters.
 *
 * @param appName - The app name to be normalized.
 * @returns The normalized app name.
 */
export const normalizeAppName = (appName: string): string => {
  return appName
    .toLowerCase()
    .replace(/\s+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
};
