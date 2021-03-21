import { IBaseItem } from '../types/IBaseItem';
import { IRESTMethods } from '../types/IRESTMethods';
import { createRequestAction } from './_createRequestAction';
import { IRESTAPIActions } from './_createRESTAPIActions.types';


export function createRESTAPIActions<APIItem extends IBaseItem>(
  baseActionType: string,
  api: IRESTMethods<APIItem>,
): IRESTAPIActions<APIItem> {
  const getAllAction = createRequestAction<APIItem[]>(
    baseActionType + '/GET_ALL',
    () => api.getAll(),
  );

  const createAction = createRequestAction<APIItem, APIItem>(
    baseActionType + '/CREATE',
    (item: APIItem) => api.create(item),
  );

  const updateAction = createRequestAction<APIItem, APIItem>(
    baseActionType + '/UPDATE',
    (item: APIItem) => api.update(item),
  );

  const deleteAction = createRequestAction<APIItem, APIItem>(
    baseActionType + '/DELETE',
    (item: APIItem) => api.delete(item),
  );

  return {
    getAll: getAllAction,
    create: createAction,
    update: updateAction,
    delete: deleteAction,
  };
}
