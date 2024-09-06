import { IQoreAppActionOption, TQoreSimpleType } from 'global/models/qore';

export interface IDealInterface {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  archived?: boolean;
  properties?: { [key: string]: TQoreSimpleType};
}

export interface IResponseDealInterface {
  results: IDealInterface;
}

export interface IDealsInterface {
  results?: IDealInterface[];
  paging?: {
    next?: {
      after?: string;
      link?: string;
    };
  };
}

export interface IUpdateCreateDealInterface extends Partial<IDealInterface> {}
export type TDealOptions = Partial<Record<keyof IDealInterface, IQoreAppActionOption>>;
