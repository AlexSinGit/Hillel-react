import { combineReducers } from 'redux';
import { IPhotoItem } from '../types';
import {photosByAlbumID, photosByID, photosGetAll} from './actions';
import {IPhotosState} from './types';

export default combineReducers<IPhotosState>({
  isLoading: isLoadingReducer,
  list: listReducer,
  single: singleReducer,
  singleIsLoad: isSingleLoadingReducer
});

function isLoadingReducer(state: boolean = false, action: any): boolean {
  switch (action.type) {
    case photosByAlbumID.START:
    case photosGetAll.START:
      return true;
    case photosByAlbumID.SUCCESS:
    case photosByAlbumID.FAILURE:
    case photosGetAll.SUCCESS:
    case photosGetAll.FAILURE:
      return false;

    default:
      return state;
  }
}

function listReducer(state: IPhotoItem[] = [], action: any): IPhotoItem[] {
  switch (action.type) {
    case photosGetAll.SUCCESS:
      return action.payload;
    case photosByAlbumID.SUCCESS:
      return action.payload;

    default:
      return state;
  }
}

function isSingleLoadingReducer(state: boolean = false, action: any):boolean {
  switch (action.type){
    case photosByID.START:
      return true;
    case photosByID.SUCCESS:
    case photosByID.FAILURE:
      return false;
    default:
      return state;
  }
}

function singleReducer(state: IPhotoItem = {id:'',albumId: -1, title: '', url: '', thumbnailUrl: ''}, action: any): IPhotoItem {
  switch (action.type) {
    case photosByID.SUCCESS:
      return action.payload;
    default:
      return state
  }
}