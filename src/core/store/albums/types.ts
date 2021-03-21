import {IAlbumItem} from '../types';


export interface IAlbumsState {
  isLoading: boolean,
  list: IAlbumItem[],
  single: IAlbumItem,
  singleIsLoading: boolean
}
