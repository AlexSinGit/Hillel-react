import {IUserItem} from '../types';


export interface IUsersState {
  isLoading: boolean;
  list: IUserItem[];
  map: any;
}
