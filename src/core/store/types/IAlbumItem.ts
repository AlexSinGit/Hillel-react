import {IBaseItem} from '../../types';

export interface IAlbumItem extends IBaseItem {
  userId: string,
  title: string
  thumb: string
}