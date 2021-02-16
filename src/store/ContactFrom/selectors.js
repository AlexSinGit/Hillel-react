export function selectFromShow(state) {
  return state.contactForm.contactFormShow;
}

export function selectName(state) {
  return state.contactForm.data.name;
}

export function selectSurName(state) {
  return state.contactForm.data.surname;
}

export function selectPhone(state) {
  return state.contactForm.data.phone;
}

export function selectNameStatus(state) {
  return state.contactForm.validation.name;
}

export function selectSurnameStatus(state) {
  return state.contactForm.validation.surname
}

export function selectPhoneStatus(state) {
  return state.contactForm.validation.phone;
}

export function selectDirtyStatus(state) {
  return state.contactForm.validation.isDirty;
}

export function selectSaveStatus(state) {
  return state.contactForm.process;
}

export function selectFormError(state) {
  return state.contactForm.error;
}

export function selectFormStatus(state) {
  let values = Object.values(state.contactForm.validation);
  return values.indexOf(false) > -1;
}

export function selectFromDirty(state) {
  return state.contactForm.validation.isDirty;
}