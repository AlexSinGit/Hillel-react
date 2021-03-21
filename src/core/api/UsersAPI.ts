import { IUserItem } from '../types';
import { BaseAPI } from './_BaseRESTAPI';

export class UsersAPI extends BaseAPI<IUserItem> {
  protected itemKey: string = 'users';
}