import { photosAPI } from '../../api';
import {IPhotoItem} from '../types';
import {createRESTAPIActions} from '../_helpers/_createRESTAPIActions';
import {createRequestAction} from '../_helpers';
import {IBaseItem} from '../../types';

const photosActions = createRESTAPIActions<IPhotoItem>('PHOTOS', photosAPI);

const photosByAlbumId = createRequestAction<IBaseItem, IBaseItem>(
    'PHOTOS/GET_BY_ALBUM_ID',
    (id: string) => photosAPI.getByAlbumId(id),
);

const photosById = createRequestAction<IBaseItem, IBaseItem>(
    'PHOTOS/GET_BY_ID',
    (id: string) => photosAPI.getPhotoById(id),
);

export const photosGetAll = photosActions.getAll;
export const photosByAlbumID = photosByAlbumId;
export const photosByID = photosById;
