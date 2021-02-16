export const CONTACT_LIST_FETCH = 'CONTACT_LIST.FETCH.START';
export const CONTACT_LIST_FETCH_DONE = 'CONTACT_LIST.FETCH.DONE';
export const CONTACT_LIST_FETCH_FAIL = 'CONTACT_LIST.FETCH.FAIL';

export function fetchStart() {
  return {
    type: CONTACT_LIST_FETCH,
  };
}

export function fetchDone(contactList) {
  return {
    type: CONTACT_LIST_FETCH_DONE,
    payload: contactList,
  };
}

export function fetchFail(error) {
  return {
    type: CONTACT_LIST_FETCH_FAIL,
    payload: error
  };
}

export function fetchList() {
  return dispatch => {
    dispatch(fetchStart());

    fetch('https://6015c49055dfbd00174ca8ec.mockapi.io/alex/contacts')
    .then((response) => {
      if(response.ok) {
        return response.json();
      }else{
        dispatch(fetchFail(`${response.status} ${response.statusText}`));
        return false;
      }
    })
    .then(contacts => {
      if(contacts) {
        const action = fetchDone(contacts);
        dispatch(action);
      }
    })
    .catch(error => {
      dispatch(fetchFail(`${error.status} ${error.message}`));
    });
  };
}