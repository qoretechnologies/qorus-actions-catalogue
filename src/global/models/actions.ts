import { GetTypeFromQoreType, IQoreAppActionOption, TQoreType } from './qore';
import { StrictRecord } from './utils';

export type GetActionsOptions<Structure extends Record<string, TQoreType>> = StrictRecord<keyof Structure, IQoreAppActionOption<Structure[keyof Structure]>>;
export type GetActionsData<Structure extends Record<string, TQoreType>> = StrictRecord<keyof Structure, GetTypeFromQoreType<Structure[keyof Structure]>>;