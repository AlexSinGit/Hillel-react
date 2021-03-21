import { Action } from 'redux';

export type IBaseAction = Action;

export interface IPayloadAction<Payload> extends IBaseAction {
  payload: Payload;
}

export interface IErrorAction extends IBaseAction {
  error: Error;
}

export type IActionCreator = () => IBaseAction;
export type IPayloadActionCreator<Payload> = (payload: Payload) => IPayloadAction<Payload>;
export type IErrorActionCreator = (error: Error) => IErrorAction;
