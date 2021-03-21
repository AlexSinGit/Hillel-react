import { combineReducers } from 'redux';

import usersReducer from './users';
import albumsReducer from './albums';
import photosReducer from './photos';
import { IState } from './state';

export const mainReducer = combineReducers<IState>({
  users: usersReducer,
  albums: albumsReducer,
  photos: photosReducer
});

