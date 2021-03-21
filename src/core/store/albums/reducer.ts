import { combineReducers } from 'redux';

import { IAlbumItem } from '../types';
import {
  albumByID,
  albumsCreate,
  albumsDelete,
  albumsGetAll,
  albumsUpdate,
} from './actions';
import { IAlbumsState } from './types';

export default combineReducers<IAlbumsState>({
  isLoading: isLoadingReducer,
  list: listReducer,
  single: singleReducer,
  singleIsLoading: isSingleLoadingReducer
});

function isLoadingReducer(state: boolean = false, action: any): boolean {
  switch (action.type) {
    case albumsGetAll.START:
      return true;

    case albumsGetAll.SUCCESS:
    case albumsGetAll.FAILURE:
      return false;

    default:
      return state;
  }
}

function listReducer(state: IAlbumItem[] = [], action: any): IAlbumItem[] {
  switch (action.type) {
    case albumsGetAll.SUCCESS:
      return action.payload;

    case albumsCreate.SUCCESS:
      return [...state, action.payload];

    case albumsUpdate.SUCCESS:
      return state.map((item) => {
        if (item.id === action.payload.id) {
          return action.payload;
        }

        return item;
      })

    case albumsDelete.SUCCESS:
      return state.filter(album => { return album.id !== action.payload.id});

    default:
      return state;
  }
}

function singleReducer(state: IAlbumItem = {id: '', userId: '', title: '', thumb: ''}, action: any): IAlbumItem {
  switch (action.type){
    case albumByID.SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

function isSingleLoadingReducer(state: boolean = false, action: any): boolean{
  switch (action.type){
    case albumByID.START:
      return true;
    case albumByID.SUCCESS:
    case albumByID.FAILURE:
      return false;
    default:
      return state;
  }
}