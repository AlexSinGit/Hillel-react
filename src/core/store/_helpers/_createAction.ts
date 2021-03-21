import {
  IActionCreator,
  IPayloadActionCreator,
  IErrorActionCreator,
} from './_createAction.types';

export function createAction(type: string): IActionCreator {
  return () => ({ type });
}

export function createPayloadAction<Payload>(type: string): IPayloadActionCreator<Payload> {
  return (payload: Payload) => ({ type, payload });
}

export function createErrorAction(type: string): IErrorActionCreator {
  return (error: Error) => ({ type, error });
}
