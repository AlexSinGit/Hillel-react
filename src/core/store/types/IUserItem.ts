import {IBaseItem} from '../../types';

export interface IUserItem extends IBaseItem {
  name: string;
  username: string;
  email: string;
  phone: string;
}