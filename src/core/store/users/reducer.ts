import { combineReducers } from 'redux';
import { IUserItem } from '../types';
import { IUsersState } from './types';
import {usersCreate, usersDelete, usersGetAll, usersUpdate} from './actions';

export default combineReducers<IUsersState>({
  isLoading: isLoadingReducer,
  list: listReducer,
  map: mapReducer
});

function isLoadingReducer(state: boolean = false, action: any): boolean {
  switch (action.type) {
    case usersGetAll.START:
      return true;

    case usersGetAll.SUCCESS:
    case usersGetAll.FAILURE:
      return false;

    default:
      return state;
  }
}

function listReducer(state: IUserItem[] = [], action: any): IUserItem[] {
  switch (action.type) {
    case usersGetAll.SUCCESS:
      return action.payload;

    case usersCreate.SUCCESS:
      return [...state, action.payload];

    case usersUpdate.SUCCESS:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      })

    case usersDelete.SUCCESS:
      return state.filter(user => { return user.id !== action.payload.id});

    default:
      return state;
  }
}

function mapReducer(state: IUserItem[] = [], action: any): any {
  switch (action.type) {
    case usersGetAll.SUCCESS:
      return action.payload.reduce((map: any, user: IUserItem) => {
        map[user.id] = user;
        return map;
      }, {});
    default:
      return state;
  }
}