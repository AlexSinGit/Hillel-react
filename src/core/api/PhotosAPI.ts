import { BaseAPI } from './_BaseRESTAPI';
import {IPhotoItem} from '../types/IPhotoItem';

export class PhotosAPI extends BaseAPI<IPhotoItem> {
  protected itemKey: string = 'photos';

  public async getByAlbumId(AlbumId: string): Promise<IPhotoItem[]> {
    const response = await this.api.get(this.itemKey + '?albumId=' + AlbumId);
    return response.data;
  }

  public async getPhotoById(PhotoId: string): Promise<IPhotoItem> {
    const response = await  this.api.get(this.itemKey + `/${PhotoId}`);
    return response.data;
  }
}