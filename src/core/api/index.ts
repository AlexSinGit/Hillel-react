import {IBaseAPIOptions} from '../types';
import {UsersAPI} from './UsersAPI';
import {AlbumsAPI} from './AlbumsAPI';
import {PhotosAPI} from './PhotosAPI';

export const usersAPI = new UsersAPI();
export const albumsAPI = new AlbumsAPI();
export const photosAPI = new PhotosAPI();

export function initAPI(baseOptions: IBaseAPIOptions) {
  usersAPI.init(baseOptions);
  albumsAPI.init(baseOptions);
  photosAPI.init(baseOptions);
}