import { IQoreAppActionOption} from 'global/models/qore';

export interface IOwnerInterface {
  id?: number;
  email?: string;
  type?: string;
  firstName?: string;
  lastName?: string;
  userId?: number;
  userIdIncludingInactive?: number;
  createdAt?: string;
  updatedAt?: string;
  archived?: boolean;
}

export interface IResponseOwnerInterface {
  results: IOwnerInterface;
}

export interface IOwnersInterface {
  Owners?: IOwnerInterface[];
  paging?: {
    next?: {
      after?: string;
      link?: string;
    };
  };
}

export interface IUpdateCreateOwnerInterface extends Partial<IOwnerInterface> {}
export type TOwnerOptions = Partial<Record<keyof IOwnerInterface, IQoreAppActionOption>>;
