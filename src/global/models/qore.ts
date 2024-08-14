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

export type TQoreAppActionFunctionAuth = {
  access_token: string;
  data?: Record<string, any>;
};

export type TQoreAppActionFunction = (
  obj: string | Record<string, any>,
  options?: Record<string, any>,
  auth?: TQoreAppActionFunctionAuth
) => any;

export type TQoreGetAllowedValuesFunction<T extends TQoreType> = (
  obj?: string | Record<string, any>,
  options?: Record<string, any>,
  auth?: TQoreAppActionFunctionAuth
) => IQoreAllowedValue<T>[];

export type TQoreSimpleType =
  | 'int'
  | 'integer'
  | 'string'
  | 'boolean'
  | 'bool'
  | 'double'
  | 'float'
  | 'number'
  | 'binary'
  | 'list'
  | 'hash'
  | 'date'
  | 'NULL'
  | 'nothing'
  | 'base64binary'
  | 'base64urlbinary'
  | 'hexbinary'
  | 'data'
  | 'softint'
  | 'softstring'
  | 'softbool'
  | 'softfloat'
  | 'softnumber'
  | 'softdate'
  | '*softint'
  | '*softstring'
  | '*softbool'
  | '*softfloat'
  | '*softnumber'
  | '*softdate'
  | 'all'
  | 'any'
  | 'auto'
  | '*int'
  | '*integer'
  | '*string'
  | '*boolean'
  | '*bool'
  | '*double'
  | '*float'
  | '*number'
  | '*binary'
  | '*list'
  | '*hash'
  | '*date'
  | '*data'
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

  export type TQoreType = TQoreSimpleType | Record<string, IQoreTypeObject>;
  export type TQoreStringCompatibleType = 'string' | 'softstring' | '*string' | 'binary';
  export type GetTypeFromQoreType<T> = T extends TQoreStringCompatibleType ? string : T;

  export interface IQoreAllowedValue<T extends TQoreType> extends IQoreAppShared {
    value: GetTypeFromQoreType<T>;
  }

export interface IQoreTypeObject<T extends TQoreType = TQoreType> extends IQoreAppShared {
  name: string; // the technical name of the field
  type: T; // either a string or a data object again
  example_value?: any; // (values must use the field's type) any example value to use when generating example data etc
  default_value?: any; // (values must use the field's type) the default value if none is provided by the user
  allowed_values?: IQoreAllowedValue<T>[]; // an array of objects providing the only values allowed for the field
  get_allowed_values?: TQoreGetAllowedValuesFunction<T>; // a function that returns the allowed values for the field
  attr?: Record<string, any>; // an optional data object with any properties
}

export interface IQoreAppActionOption<T extends TQoreType = TQoreType> {
  default_value?: GetTypeFromQoreType<T>;
  example_value?: GetTypeFromQoreType<T>;
  loc?: string;
  ref_data?: string;
  required?: boolean;
  sensitive?: boolean;
  type: T;
  allowed_values?: IQoreAllowedValue<T>[];
  get_allowed_values?: TQoreGetAllowedValuesFunction<T>;
}

export interface IQoreAppActionWithoutFunction extends IQoreAppAction {
  action_code: 1;
}

export interface IQoreAppActionWithFunction<Options = Record<string, IQoreAppActionOption>, Response = Record<string, TQoreType>> extends IQoreAppAction {
  action_code: 2;
  app_function: TQoreAppActionFunction;
  options: StrictRecord<keyof Options, Options[keyof Options]>;
  response_type: StrictRecord<keyof Response, Response[keyof Response]>;
}

export type TQorePartialActionWithFunction<Options, Response> = Pick<
  IQoreAppActionWithFunction<Options, Response>,
  'app_function' | 'response_type' | 'options' | 'action'
>;

export interface IActionInitializationProps {
  locale: Locales;
}
