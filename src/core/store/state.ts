import { IUsersState } from './users';
import {IAlbumsState} from './albums';
import {IPhotosState} from './photos';

export interface IState {
  users: IUsersState,
  albums: IAlbumsState,
  photos: IPhotosState
}
