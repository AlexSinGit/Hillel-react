import { IUserItem } from '../types';
import { IState } from '../state';
import { IUsersState } from './types';

export function selectUsers(state: IState): IUsersState {
  return state.users;
}

export function selectUsersIsLoading(state: IState): boolean {
  return selectUsers(state).isLoading;
}

export function selectUsersList(state: IState): IUserItem[] {
  return selectUsers(state).list;
}

export function selectUsersMap(state: IState): any {
  return selectUsers(state).map;
}