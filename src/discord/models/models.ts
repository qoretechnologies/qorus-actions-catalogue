export interface ResponseStatus {
  success: boolean;
}

export interface Guild {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
  permissions: string;
  features: string[];
}

export interface Channel extends ResponseStatus {
  id: string;
  name: string;
}

export interface Role extends ResponseStatus {
  id: string;
  name: string;
}

export interface Member extends ResponseStatus {
  id: string;
  username: string;
}
