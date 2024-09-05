import {
  GetOptionDefinitionFromQoreType,
  GetResponseDefinitionFromQoreType,
  TQoreType,
} from './qore';
import { StrictRecord } from './utils';

export interface IActionOptions {
  [key: string]: GetOptionDefinitionFromQoreType<TQoreType>;
}

export interface IActionResponse {
  [key: string]: GetResponseDefinitionFromQoreType<TQoreType>;
}

export type TActionData<Options extends IActionOptions> = StrictRecord<keyof Options, any>;

export type TActionResponse<Response extends IActionResponse> = StrictRecord<keyof Response, any>;
