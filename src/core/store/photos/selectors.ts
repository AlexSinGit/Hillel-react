import { IPhotoItem } from '../types';
import { IState } from '../state';
import { IPhotosState } from './types';

export function selectPhotos(state: IState): IPhotosState {
  return state.photos;
}

export function selectPhotosIsLoading(state: IState): boolean {
  return selectPhotos(state).isLoading;
}

export function selectPhotosList(state: IState): IPhotoItem[] {
  return selectPhotos(state).list;
}

export function selectPhoto(state: IState): IPhotoItem{
  return selectPhotos(state).single;
}

export function selectPhotoIsLoading(state: IState): boolean {
  return selectPhotos(state).singleIsLoad;
}