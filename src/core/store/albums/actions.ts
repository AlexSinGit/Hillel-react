import { IAlbumItem } from '../types';
import {albumsAPI, photosAPI} from '../../api';
import { createRESTAPIActions } from '../_helpers/_createRESTAPIActions';
import {createRequestAction} from '../_helpers';
import {IBaseItem} from '../../types';

const albumsActions = createRESTAPIActions<IAlbumItem>('ALBUMS', albumsAPI);

const getAlbumByID = createRequestAction<IBaseItem, IBaseItem>(
    'ALBUMS/GET_BY_ID',
    (id: string) => albumsAPI.getAlbumById(id),
);

export const albumsGetAll = albumsActions.getAll;
export const albumsCreate = albumsActions.create;
export const albumsUpdate = albumsActions.update;
export const albumsDelete = albumsActions.delete;
export const albumByID = getAlbumByID;