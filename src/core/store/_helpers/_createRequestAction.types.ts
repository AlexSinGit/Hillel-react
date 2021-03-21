export type IRequestActionCreator<Params> = (params: Params) => void;
export type IRequestActionTypes = {
  START: string;
  SUCCESS: string;
  FAILURE: string;
};

export type IRequestAction<Params> = IRequestActionCreator<Params> & IRequestActionTypes;
