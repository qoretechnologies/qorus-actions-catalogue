import { IQoreAppActionOption, TQoreSimpleType } from 'global/models/qore';

export interface IUserInterface {
  createdAt?: string;
  updatedAt?: string;
  id?: number;
  archived?: boolean;
  properties?: { [key: string]: TQoreSimpleType};
}

export interface IResponseUserInterface {
  results: IUserInterface;
}

export interface IUsersInterface {
  users?: IUserInterface[];
  paging?: {
    next?: {
      after?: string;
      link?: string;
    };
  };
}

export interface IUpdateCreateUserInterface extends Partial<IUserInterface> {}
export type TUserOptions = Partial<Record<keyof IUserInterface, IQoreAppActionOption>>;
