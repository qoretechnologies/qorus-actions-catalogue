import { IQoreAppActionOption, TQoreSimpleType } from 'global/models/qore';

export interface IContactInterface {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  archived?: boolean;
  properties?: { [key: string]: TQoreSimpleType };
}

export interface IResponseContactInterface {
  results: IContactInterface;
}

export interface IContactsInterface {
  results?: IContactInterface[];
  paging?: {
    next?: {
      after?: string;
      link?: string;
    };
  };
}

export interface IUpdateCreateContactInterface extends Partial<IContactInterface> {}
export type TContactOptions = Partial<Record<keyof IContactInterface, IQoreAppActionOption>>;
