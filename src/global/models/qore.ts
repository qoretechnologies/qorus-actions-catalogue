import { Locales } from 'i18n/i18n-types';
import { StrictRecord } from './utils';

export interface IQoreAppShared {
  display_name: string;
  short_desc: string;
  desc?: string;
}

type TQoreRestContentEncoding = 'gzip' | 'bzip2' | 'deflate' | 'identity';

type TQoreRestData = 'auto' | 'json' | 'yaml' | 'rawxml' | 'xml' | 'url' | 'text' | 'bin';

type TQoreRestOauth2GrantType = 'authorization_code' | 'client_credentials' | 'password';

type TQoreRestConnectionConfig = {
  // Specifies the encoding to be used for message bodies when sending requests.
  // Possible values: "gzip", "bzip2", "deflate", "identity".
  content_encoding?: TQoreRestContentEncoding;

  // Specifies how the message body should be serialized.
  // Possible values include "auto" (default), "json", "yaml", "rawxml", "xml", "url", "text", "bin".
  data?: TQoreRestData;

  // Set to true to disable automatic pings, which is useful for rate-limited, metered, or other connections
  // that should not be pinged regularly (default: false).
  disable_automatic_pings?: boolean;

  // A boolean flag indicating if additional characters should be percent-encoded in URLs.
  encode_chars?: boolean;

  // An optional object containing headers to be sent with every request. Keys represent header names, and
  // values represent the corresponding header values.
  headers?: Record<string, string>;

  // An optional object with arguments to be serialized as query parameters in the request to the OAuth2
  // authorization URL when using the "authorization_code" grant type.
  oauth2_auth_args?: Record<string, any>;

  // The OAuth2 authorization URL used for the "authorization_code" grant type. This is ignored if a token
  // is provided directly.
  oauth2_auth_url?: string;

  // If set to true, OAuth2 tokens will be automatically refreshed when they expire (default: true).
  oauth2_auto_refresh?: boolean;

  // The OAuth2 client ID, required for certain OAuth2 flows (e.g., "authorization_code", "client_credentials").
  oauth2_client_id?: string;

  // The OAuth2 client secret, required alongside the client ID for certain OAuth2 flows.
  oauth2_client_secret?: string;

  // The OAuth2 grant type being used. Possible values are "authorization_code", "client_credentials", "password".
  oauth2_grant_type?: TQoreRestOauth2GrantType;

  // The OAuth2 redirect URL used for the "authorization_code" grant type.
  oauth2_redirect_url?: string;

  // An OAuth2 refresh token that complements the `token` option to allow for token renewal.
  oauth2_refresh_token?: string;

  // A list of OAuth2 scopes to request during authorization. Ignored if the `token` option is set.
  oauth2_scopes?: string[];

  // Extra arguments for OAuth2 token requests, which will be serialized as query parameters.
  oauth2_token_args?: Record<string, any>;

  // The OAuth2 token URL used to obtain access tokens. Ignored if the `token` option is set.
  oauth2_token_url?: string;

  // The password for authentication. Not used in conjunction with OAuth2 configurations.
  password?: string;

  // The HTTP method to use for pings (e.g., "GET", "POST").
  ping_method?: string;

  // Headers to be sent with ping requests. Keys represent header names, and values represent the corresponding
  // header values.
  ping_headers?: Record<string, string>;

  // The message body to send with pings. The type of this body depends on the specific use case.
  ping_body?: any;

  // The proxy URL for connecting through a proxy server.
  proxy?: string;

  // A PEM-encoded string representing an X.509 client certificate.
  ssl_cert_data?: string;

  // A PEM-encoded string representing an X.509 client key.
  ssl_key_data?: string;

  // If set to true, server certificates will only be accepted if they pass verification.
  ssl_verify_cert?: boolean;

  // A bearer token to use for the connection. This token will be passed as the `Authorization: Bearer ...` header.
  // If set, any OAuth2 options are ignored.
  token?: string;

  // The type of token to use for the `Authorization` header (e.g., "Bearer"). Ignored if no `token` is provided.
  token_type?: string;

  // The URL to connect to. This is a required field and represents the endpoint for the connection.
  url: string;

  // The username for authentication. Not used in conjunction with OAuth2 configurations.
  username?: string;
};

export interface IQoreApp extends IQoreAppShared {
  name: string;
  logo?: string;
  logo_file_name?: string;
  logo_mime_type?: string;
  rest?: TQoreRestConnectionConfig;
}

export interface IQoreAppWithActions extends IQoreApp {
  actions: IQoreAppActionWithFunction[];
}

export type TQoreApps = Record<string, IQoreAppWithActions>;

export interface IQoreAppAction extends IQoreAppShared {
  app: string;
  action: string;
  action_code: 1 | 2; // What are other possible values?
}

export type TQoreAppActionFunctionContext = {
  conn_name: string;
  conn_options?: Record<string, any>;
  opts?: Record<string, any>;
};

export type TQoreAppActionFunction = (
  obj: string | Record<string, any>,
  options?: Record<string, any>,
  context?: TQoreAppActionFunctionContext
) => any;

export type TQoreGetAllowedValuesFunction<TypeValue = unknown> = (
  context?: TQoreAppActionFunctionContext
) => IQoreAllowedValue<TypeValue>[];

export type TQoreStringCompatibleType =
  | 'string'
  | '*string'
  | 'softstring'
  | '*string'
  | 'binary'
  | 'date'
  | 'base64binary'
  | 'base64urlbinary'
  | 'hexbinary'
  | 'softdate'
  | '*softstring'
  | '*softdate'
  | '*binary'
  | '*date'
  | '*base64binary'
  | '*base64urlbinary'
  | '*hexbinary'
  | 'byte'
  | '*byte'
  | 'softbyte'
  | '*softbyte'
  | 'ubyte'
  | '*ubyte'
  | 'softubyte'
  | '*softubyte';

export type TQoreNumberCompatibleType =
  | 'int'
  | '*number'
  | '*float'
  | '*double'
  | '*integer'
  | 'float'
  | 'number'
  | 'integer'
  | 'double'
  | 'softint'
  | 'softfloat'
  | 'softnumber'
  | '*softint'
  | '*softfloat'
  | '*softnumber'
  | '*int';
export type TQoreHashCompatibleType = 'hash' | '*hash' | '*data' | 'data';
export type TQoreListCompatibleType = 'list' | '*list';
export type TQoreBooleanCompatibleType =
  | 'boolean'
  | '*boolean'
  | 'softbool'
  | '*bool'
  | '*bool'
  | 'bool'
  | '*softbool';
export type TQoreNullableType = 'NULL' | 'nothing';
export type TQoreAnyType = 'all' | 'any' | 'auto';

export type TQoreSimpleType =
  | TQoreStringCompatibleType
  | TQoreNumberCompatibleType
  | TQoreHashCompatibleType
  | TQoreListCompatibleType
  | TQoreBooleanCompatibleType
  | TQoreNullableType
  | TQoreAnyType;

export type TQoreType = TQoreSimpleType | Record<string, IQoreTypeObject>;

export type GetOptionDefinitionFromQoreType<T extends TQoreType> =
  T extends TQoreStringCompatibleType
    ? IQoreAppActionOption<T, string>
    : T extends TQoreNumberCompatibleType
      ? IQoreAppActionOption<T, number>
      : T extends TQoreHashCompatibleType
        ? IQoreAppActionOption<T, Record<string, any>>
        : T extends TQoreBooleanCompatibleType
          ? IQoreAppActionOption<T, boolean>
          : T extends TQoreListCompatibleType
            ? IQoreAppActionOption<T, unknown[]>
            : T extends TQoreNullableType
              ? IQoreAppActionOption<T, null>
              : T extends Record<string, IQoreTypeObject>
                ? IQoreAppActionOption<T, Record<string, any>>
                : never;

export type GetResponseDefinitionFromQoreType<T extends TQoreType> =
  T extends TQoreStringCompatibleType
    ? IQoreTypeObject<T, string>
    : T extends TQoreNumberCompatibleType
      ? IQoreTypeObject<T, number>
      : T extends TQoreHashCompatibleType
        ? IQoreTypeObject<T, Record<string, any>>
        : T extends TQoreBooleanCompatibleType
          ? IQoreTypeObject<T, boolean>
          : T extends TQoreListCompatibleType
            ? IQoreTypeObject<T, unknown[]>
            : T extends TQoreNullableType
              ? IQoreTypeObject<T, null>
              : T extends Record<string, IQoreTypeObject>
                ? IQoreAppActionOption<T, Record<string, any>>
                : never;

export interface IQoreAllowedValue<TypeValue = unknown> extends IQoreAppShared {
  value: TypeValue;
}

export interface IQoreTypeObject<TypeName extends TQoreType = TQoreType, TypeValue = unknown>
  extends IQoreAppShared {
  name: string; // the technical name of the field
  type: TypeName; // either a string or a data object again
  example_value?: TypeValue; // (values must use the field's type) any example value to use when generating example data etc
  default_value?: TypeValue; // (values must use the field's type) the default value if none is provided by the user
  allowed_values?: IQoreAllowedValue<TypeValue>[]; // an array of objects providing the only values allowed for the field
  get_allowed_values?: TQoreGetAllowedValuesFunction<TypeValue>; // a function that returns the allowed values for the field
  attr?: Record<string, any>; // an optional data object with any properties
}

export interface IQoreAppActionOption<TypeName extends TQoreType = TQoreType, TypeValue = unknown>
  extends IQoreAppShared {
  default_value?: TypeValue;
  example_value?: TypeValue;
  loc?: string;
  ref_data?: string;
  required?: boolean;
  sensitive?: boolean;
  type: TypeName;

  allowed_values?: IQoreAllowedValue<TypeValue>[];
  get_allowed_values?: TQoreGetAllowedValuesFunction<TypeValue>;
}

export interface IQoreAppActionWithoutFunction extends IQoreAppAction {
  action_code: 1;
}

export interface IQoreAppActionWithFunction<
  Options = Record<string, IQoreAppActionOption>,
  Response = Record<string, IQoreTypeObject>,
> extends IQoreAppAction {
  action_code: 2;
  app_function: TQoreAppActionFunction;
  options: StrictRecord<keyof Options, Options[keyof Options]>;
  response_type: StrictRecord<keyof Response, Response[keyof Response]>;
}

export type TQorePartialActionWithFunction<
  Options = Record<string, IQoreAppActionOption>,
  Response = Record<string, IQoreTypeObject>,
> = Pick<
  IQoreAppActionWithFunction<Options, Response>,
  'app_function' | 'response_type' | 'options' | 'action'
>;

export interface IActionInitializationProps {
  locale: Locales;
}
