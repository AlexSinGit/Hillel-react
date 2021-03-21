import { IRequestAction } from './_createRequestAction.types';

export interface IRESTAPIActions<APIItem> {
  getAll: IRequestAction<void>;
  create: IRequestAction<APIItem>;
  update: IRequestAction<APIItem>;
  delete: IRequestAction<APIItem>;
}
