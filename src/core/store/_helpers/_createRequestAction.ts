import { Dispatch } from 'redux';
import {
  createAction,
  createPayloadAction,
  createErrorAction,
} from './_createAction';
import { IRequestAction } from './_createRequestAction.types';

export function createRequestAction<Result = void, RequestParams = void>(
  type: string,
  handler: any,
  separator: string = '.',
): IRequestAction<RequestParams> {
  actionCreator.START = type + separator + 'START';
  actionCreator.SUCCESS = type + separator + 'SUCCESS';
  actionCreator.FAILURE = type + separator + 'FAILURE';

  const start = createAction(actionCreator.START);
  const success = createPayloadAction<Result>(actionCreator.SUCCESS);
  const failure = createErrorAction(actionCreator.FAILURE);

  return actionCreator as IRequestAction<RequestParams>;

  function actionCreator(params: RequestParams) {
    return async (dispatch: Dispatch) => {
      const startAction = start();
      dispatch(startAction);

      try {
        const result: Result = await handler(params);
        const resultAction = success(result);
        dispatch(resultAction);
      } catch (error) {
        const errorAction = failure(error);
        dispatch(errorAction);
      }
    };
  }
}
