import axios, { AxiosInstance } from 'axios';

import {IBaseAPIOptions, IBaseItem, IRESTMethods} from '../types';


export abstract class BaseAPI<Item extends IBaseItem> implements IRESTMethods<Item> {

  protected get api(): AxiosInstance {
    if (!this._api) {
      throw new Error('API is not initialized');
    }

    return this._api;
  }

  protected abstract itemKey: string;
  private _api!: AxiosInstance;

  public init(options: IBaseAPIOptions): void {
    this._api = axios.create({
      baseURL: `https://jsonplaceholder.typicode.com/`,
    });
  }

  public async getAll(): Promise<Item[]> {
    const response = await this.api.get(this.itemKey);
    return response.data;
  }

  public async create(item: Item): Promise<Item> {
    const response = await this.api.post(this.itemKey, item);
    return response.data;
  }

  public async update(item: Item): Promise<Item> {
    const response = await this.api.put(`${this.itemKey}/${item.id}`, item);
    return response.data;
  }

  public async delete(item: Item): Promise<Item> {
    const response = await this.api.delete(`${this.itemKey}/${item.id}`);
    if(response.status >= 200 && response.status < 300) {
      if(Object.keys(response.data).length > 0) {
        return response.data;
      }else{
        return item;
      }
    }else{
      return response.data;
    }
  }
}