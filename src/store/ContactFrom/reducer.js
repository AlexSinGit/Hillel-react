import {
  CONTACT_LIST_FORM_INPUT_CHANGE,
  CONTACT_LIST_TOGGLE_FORM,
  CONTACT_LIST_SAVE_DONE,
  CONTACT_LIST_SAVE_ERROR,
  CONTACT_LIST_FORM_SAVE,
  CONTACT_LIST_FORM_FIELD_VALIDATE_ERROR,
} from './actions';

const defaultState = {
  contactFormShow: false,
  validation: {
    isDirty: false,
    name: false,
    surname: false,
    phone: false
  },
  error: false,
  data: {
    name: '',
    surname: '',
    phone: ''
  }
};

export function reducer(state = defaultState, action) {
  switch (action.type){
    case CONTACT_LIST_TOGGLE_FORM:
      return {
        ...state,
        contactFormShow: action.payload,
        error: false,
        data: {
          name: '',
          surname: '',
          phone: ''
        }
      }
    case CONTACT_LIST_FORM_FIELD_VALIDATE_ERROR:
      let validation = state.validation;
      validation['isDirty'] = true;
      validation[action.payload.name] = action.payload.value
      return {
        ...state,
        validation: {...validation}
      }
    case CONTACT_LIST_FORM_INPUT_CHANGE:
      let data = state.data;
      data[action.payload.name] = action.payload.value;
      return {
        ...state,
        data: data
      }
    case CONTACT_LIST_SAVE_DONE:
      return {
        ...state,
        process: false,
        data: {
          name: '',
          surname: '',
          phone: ''
        }
      }
    case CONTACT_LIST_FORM_SAVE:
      return {
        ...state,
        process: true,
      }
    case CONTACT_LIST_SAVE_ERROR:
      return {
        ...state,
        process: false,
        error: action.payload
      }
    default:
      return state;
  }
}