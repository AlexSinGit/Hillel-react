export function selectContactList(state) {
  return state.contactList.list;
}

export function selectListLoadingStatus(state) {
  return state.contactList.isLoad;
}

export function selectErrorText(state) {
  return state.contactList.error;
}