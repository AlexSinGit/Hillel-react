import { CONTACT_LIST_FETCH_DONE, CONTACT_LIST_FETCH, CONTACT_LIST_FETCH_FAIL } from './actions';
import {CONTACT_LIST_SAVE_DONE} from '../ContactFrom/actions';

const defaultState = {
  list: [],
  isLoad: false,
  error: false
};

export function reducer(state = defaultState, action) {
  switch (action.type){
    case CONTACT_LIST_FETCH_FAIL:
      return {
        ...state,
        error: action.payload,
        isLoad: false
      }
    case CONTACT_LIST_FETCH:
      return {
        ...state,
        isLoad: true
      }
    case CONTACT_LIST_FETCH_DONE:
      return {
        ...state,
        isLoad: false,
        list: action.payload
      }
    case CONTACT_LIST_SAVE_DONE:
      return {
        ...state,
        list: [...state.list, action.payload],
      };
    default:
      return state;
  }
}