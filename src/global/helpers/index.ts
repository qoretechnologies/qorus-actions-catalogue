import { Locales, Translation } from 'i18n/i18n-types';
import { capitalize, omit, reduce } from 'lodash';
import {
  IQoreAppActionOption,
  IQoreTypeObject,
  TQoreAppAction,
  TQoreOptions,
  TQorePartialAction,
  TQoreResponseType,
  TStringWithFirstUpperCaseCharacter,
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
  actions: Record<string, TQorePartialAction>,
  locale: Locales
): TQoreAppAction[] => {
  return Object.entries(actions).map(([_a, action]) => ({
    ...omit(action, OMMITTED_FIELDS),

    display_name:
      // @ts-expect-error no idea whats going on here, will fix later
      L[locale].apps[app].actions[action.action as unknown].displayName() ||
      capitalize(action.action.replace(/_/g, ' ')),

    short_desc:
      // @ts-expect-error no idea whats going on here, will fix later
      L[locale].apps[app].actions[action.action as unknown].shortDesc() ||
      capitalize(action.action.replace(/_/g, ' ')),

    desc:
      // @ts-expect-error no idea whats going on here, will fix later
      L[locale].apps[app].actions[action.action as unknown].longDesc() ||
      capitalize(action.action.replace(/_/g, ' ')),
    app,
    action_code: 2,

    options:
      'options' in action
        ? fixActionOptions(action.options, app, locale, action._localizationGroup)
        : undefined,
    ...('response_type' in action && {
      response_type: fixActionType(action.response_type, app, locale, action._localizationGroup),
    }),
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

export const normalizeAppName = (appName: string): TStringWithFirstUpperCaseCharacter => {
  return capitalize(normalizeName(appName)) as TStringWithFirstUpperCaseCharacter;
};
