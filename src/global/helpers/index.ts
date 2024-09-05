import { Locales, Translation } from 'i18n/i18n-types';
import { omit, reduce } from 'lodash';
import {
  IQoreAppActionOption,
  IQoreAppActionWithFunction,
  IQoreTypeObject,
  TQoreOptions,
  TQorePartialActionWithFunction,
  TQoreResponseType,
} from '../../global/models/qore';
import { L } from '../../i18n/i18n-node';

// !IMPORTANT
// These fields need to be ommited from  each action, they are used for internal purposes
export const OMMITTED_FIELDS = ['_localizationGroup'] as const;

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
    ...omit(action, OMMITTED_FIELDS),
    // @ts-expect-error no idea whats going on here, will fix later
    display_name: L[locale].apps[app].actions[actionName as unknown].displayName(),
    // @ts-expect-error no idea whats going on here, will fix later
    short_desc: L[locale].apps[app].actions[actionName as unknown].shortDesc(),
    // @ts-expect-error no idea whats going on here, will fix later
    desc: L[locale].apps[app].actions[actionName as unknown].longDesc(),
    app,
    action_code: 2,

    options: fixActionOptions(action.options, app, locale, action._localizationGroup),
    response_type: fixActionType(action.response_type, app, locale, action._localizationGroup),
  }));
};

export const fixActionType = (
  collection: TQoreResponseType,
  appName: string,
  locale: Locales,
  localeGroup: string
): TQoreResponseType => {
  return reduce(
    collection,
    (newCollection: TQoreResponseType, type: IQoreTypeObject, key: string): TQoreResponseType => {
      return {
        ...newCollection,
        [key]: {
          ...type,
          type:
            typeof type.type === 'object'
              ? fixActionType(type.type, appName, locale, localeGroup)
              : type.type,
          display_name:
            // @ts-expect-error no idea whats going on here, will fix later
            type.display_name || L[locale].apps[appName].actions[localeGroup][key].displayName(),
          short_desc:
            // @ts-expect-error no idea whats going on here, will fix later
            type.short_desc || L[locale].apps[appName].actions[localeGroup][key].shortDesc(),
          // @ts-expect-error no idea whats going on here, will fix later
          desc: type.desc || L[locale].apps[appName].actions[localeGroup][key].longDesc(),
        },
      };
    },
    {}
  );
};

export const fixActionOptions = (
  collection: TQoreOptions,
  appName: string,
  locale: Locales,
  localeGroup: string
): TQoreOptions => {
  return reduce(
    collection,
    (newCollection: TQoreOptions, option: IQoreAppActionOption, key: string): TQoreOptions => {
      return {
        ...newCollection,
        [key]: {
          ...option,
          type:
            typeof option.type === 'object'
              ? fixActionType(option.type, appName, locale, localeGroup)
              : option.type,
          display_name:
            // @ts-expect-error no idea whats going on here, will fix later
            option.display_name || L[locale].apps[appName].actions[localeGroup][key].displayName(),
          short_desc:
            // @ts-expect-error no idea whats going on here, will fix later
            option.short_desc || L[locale].apps[appName].actions[localeGroup][key].shortDesc(),
          // @ts-expect-error no idea whats going on here, will fix later
          desc: option.desc || L[locale].apps[appName].actions[localeGroup][key].longDesc(),
        },
      };
    },
    {}
  );
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
export const normalizeName = (appName: string): string => {
  return appName
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .toLowerCase()
    .replace(/[-\s]+/g, '_')
    .replace(/[^a-z0-9_]/g, '');
};
