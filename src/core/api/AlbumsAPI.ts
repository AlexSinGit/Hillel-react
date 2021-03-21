import { IAlbumItem } from '../types/IAlbumItem';
import { BaseAPI } from './_BaseRESTAPI';

export class AlbumsAPI extends BaseAPI<IAlbumItem> {
  protected itemKey: string = 'albums';

  public async getAlbumById(AlbumId: string): Promise<IAlbumItem> {
    const response = await  this.api.get(this.itemKey + `/${AlbumId}`);
    return response.data;
  }
}