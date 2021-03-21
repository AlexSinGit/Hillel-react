import { IBaseItem } from './IBaseItem';

export interface IUserItem extends IBaseItem {
  name: string;
  username: string;
  email: string;
  phone: string;
}

