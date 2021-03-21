import { IBaseItem } from './IBaseItem';

export interface IPhotoItem extends IBaseItem {
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

