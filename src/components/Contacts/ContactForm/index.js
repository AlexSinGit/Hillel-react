import './style.scss';
import React from 'react';
import { connect } from 'react-redux';
import {
  changeText, selectDirtyStatus,
  selectFormError,
  selectFormStatus,
  selectFromShow,
  selectName,
  selectNameStatus,
  selectPhone, selectPhoneStatus,
  selectSaveStatus,
  selectSurName,
  selectSurnameStatus,
  toggleForm,
} from '../../../store/ContactFrom';
import {saveContact, validate} from '../../../store/ContactFrom/actions';

class _ContactFrom extends React.Component{

  render(){
    const {
      name, surname, phone, error, validate, formValid, formDirty,
      isProcess, saveContact, toggleForm, inputChange} = this.props;
    return (
        <div className="form-wrap">
          {error && <div className="alert alert-danger" role="alert">
            Ошибка: {error}
          </div>}
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Имя</span>
            <input type="text" className={`form-control ${!name.valid && formDirty ? 'in-valid': ''}`} name="name" value={name.value} onChange={(e) => {validate(e.target.name, e.target.value); inputChange(e.target.name, e.target.value)}} required/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Фамилия</span>
            <input type="text" className={`form-control ${!surname.valid && formDirty ? 'in-valid': ''}`} name="surname" value={surname.value} onChange={(e) => {validate(e.target.name, e.target.value); inputChange(e.target.name, e.target.value)}} required/>
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text" id="basic-addon1">Телефон</span>
            <input type="text" className={`form-control ${!phone.valid && formDirty ? 'in-valid': ''}`} name={"phone"} value={phone.value} onChange={(e) => {validate(e.target.name, e.target.value); inputChange(e.target.name, e.target.value)}} required/>
          </div>
          <button type="button" className="btn btn-outline-success" disabled={isProcess || formValid} onClick={() => {saveContact(name.value, surname.value, phone.value);}}>
            { !isProcess && 'Сохранить'}
            { isProcess && <span><span className="spinner-border spinner-border-sm"/><span className="sr-only">&nbsp;Сохранение...</span></span> }
          </button>&nbsp;
          <button type="button" className="btn btn-outline-secondary" onClick={() => {toggleForm(false);}}>Отмена</button>
        </div>
    )
  }
}

function mapStateToProps(state){
  return {
    formShow: selectFromShow(state),
    name: {valid: selectNameStatus(state), value: selectName(state)},
    surname: {valid: selectSurnameStatus(state), value: selectSurName(state)},
    phone: {valid: selectPhoneStatus(state), value: selectPhone(state)},
    isProcess: selectSaveStatus(state),
    error: selectFormError(state),
    formValid: selectFormStatus(state),
    formDirty: selectDirtyStatus(state)
  }
}

function mapDispatchToProps(dispatch){
  return {
    toggleForm: (status) => dispatch(toggleForm(status)),
    inputChange: (name, value) => dispatch(changeText(name, value)),
    saveContact: (name, surname, phone) => dispatch(saveContact(name, surname, phone)),
    validate: (name, value) => dispatch(validate(name, value))
  }
}

export const ContactForm = connect(mapStateToProps, mapDispatchToProps)(_ContactFrom);