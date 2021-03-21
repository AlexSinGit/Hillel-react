import { IAlbumItem } from '../types';
import { IState } from '../state';
import { IAlbumsState } from './types';

export function selectAlbums(state: IState): IAlbumsState {
  return state.albums;
}

export function selectAlbumsIsLoading(state: IState): boolean {
  return selectAlbums(state).isLoading;
}

export function selectAlbumsList(state: IState): IAlbumItem[] {
  return selectAlbums(state).list;
}

export function selectAlbum(state: IState): IAlbumItem {
  return selectAlbums(state).single;
}

export function selectAlbumIsLoading(state: IState): boolean {
  return selectAlbums(state).singleIsLoading;
}
