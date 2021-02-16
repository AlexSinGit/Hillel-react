export const CONTACT_LIST_TOGGLE_FORM = "CONTACT_LIST.TOGGLE_FORM";
export const CONTACT_LIST_FORM_INPUT_CHANGE = "CONTACT_LIST.FORM_INPUT_CHANGE";
export const CONTACT_LIST_FORM_SAVE = "CONTACT_LIST.FORM_SAVE";
export const CONTACT_LIST_SAVE_DONE = "CONTACT_LIST.FORM_SAVE_DONE";
export const CONTACT_LIST_SAVE_ERROR = "CONTACT_LIST.FORM_SAVE_ERROR";
export const CONTACT_LIST_FORM_FIELD_VALIDATE_ERROR = "CONTACT_LIST.FORM_FIELD_ERROR";

export function toggleForm(status = false) {
  return {
    type: CONTACT_LIST_TOGGLE_FORM,
    payload: status
  };
}

export function validate(name, value) {
  let validators = {
    phone: /^((\+38)?0\d{9}|\+7\d{10})$/
  }
  if(value.trim() === ''){
    return {
      type: CONTACT_LIST_FORM_FIELD_VALIDATE_ERROR,
      payload: {name: name, value: false}
    }
  }

  if(typeof validators[name] !== 'undefined'){
    if(!value.match(validators[name])){
      return {
        type: CONTACT_LIST_FORM_FIELD_VALIDATE_ERROR,
        payload: {name: name, value: false}
      }
    }
  }

  return {
    type: CONTACT_LIST_FORM_FIELD_VALIDATE_ERROR,
        payload: {name: name, value: true}
  }
}

export function changeText(name, value) {
  return {
    type: CONTACT_LIST_FORM_INPUT_CHANGE,
    payload: {name, value}
  }
}

export function onSaveData(contact) {
  return {
    type: CONTACT_LIST_SAVE_DONE,
    payload: contact
  }
}

export function onSaveDataFail(error) {
  return {
    type: CONTACT_LIST_SAVE_ERROR,
    payload: error
  }
}

export function onStartSave() {
  return {
    type: CONTACT_LIST_FORM_SAVE
  }
}

export function saveContact(name, surname, phone){
  return dispatch => {
    dispatch(onStartSave());
    fetch('https://6015c49055dfbd00174ca8ec.mockapi.io/alex/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({name, surname, phone})
    }).then((response) => {
      if(response.ok) {
        return response.json();
      }else{
        dispatch(onSaveDataFail(`${response.status} ${response.statusText}`));
        return false;
      }
    }).then((response) => {
      if(response) {
        dispatch(onSaveData(response));
        dispatch(toggleForm(false));
      }
    }).catch((error) => {
      dispatch(onSaveDataFail(error.message));
    });
  }
}