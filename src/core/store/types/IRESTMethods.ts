import { IBaseItem } from './IBaseItem';

export interface IRESTMethods<Item extends IBaseItem> {
  getAll(): Promise<Item[]>;
  create(item: Item): Promise<Item>;
  update(item: Item): Promise<Item>;
  delete(item: Item): Promise<Item>;
}
