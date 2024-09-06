import { IQoreAppActionOption, TQoreSimpleType } from 'global/models/qore';

export interface ICompanyInterface {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  archived?: boolean;
  properties?: { [key: string]: TQoreSimpleType};
}

export interface IResponseCompanyInterface {
  results: ICompanyInterface;
}

export interface ICompanysInterface {
  results?: ICompanyInterface[];
  paging?: {
    next?: {
      after?: string;
      link?: string;
    };
  };
}

export interface IUpdateCreateCompanyInterface extends Partial<ICompanyInterface> {}
export type TCompanyOptions = Partial<Record<keyof ICompanyInterface, IQoreAppActionOption>>;
