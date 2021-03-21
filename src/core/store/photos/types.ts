import {IPhotoItem} from '../types';

export interface IPhotosState {
  isLoading: boolean;
  list: IPhotoItem[];
  single: IPhotoItem;
  singleIsLoad: boolean;
}
