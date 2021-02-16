import React from 'react';
import { connect } from 'react-redux';

import {
  ContactEmpty,
  ContactError,
  ContactItem,
  ContactSpinner,
} from '../ContactItem';
import {ContactForm} from '../ContactForm';
import {
  fetchList,
  selectContactList, selectErrorText, selectListLoadingStatus,
} from '../../../store/ContactList';
import {selectFromShow, toggleForm} from '../../../store/ContactFrom';

class _ContactsList extends React.Component{
  componentDidMount() {
    document.title = 'Контакты';
    this.props.loadList();
  }

  render(){
    const {list, formShow, error, toggleForm, isLoad} = this.props;
    return (
        <div>
          <table className="table">
            <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Имя</th>
              <th scope="col">Фамилия</th>
              <th scope="col">Телефон</th>
            </tr>
            </thead>
            <tbody>
            {isLoad && <ContactSpinner/>}
            {!isLoad && !error && list.length > 0 && list.map((item, index) => {
              return <ContactItem key={index} {...item} />
            })}
            {!isLoad && !error && list.length === 0 && <ContactEmpty/>}
            {!isLoad && error && <ContactError error={error}/>}
            </tbody>
          </table>
          {!formShow && <button type="button" className="btn btn-outline-primary" onClick={() => {toggleForm(true);}}>Добавить контакт</button>}
          {formShow && <ContactForm/>}
        </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    list: selectContactList(state),
    formShow: selectFromShow(state),
    isLoad: selectListLoadingStatus(state),
    error: selectErrorText(state)
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadList: () => dispatch(fetchList()),
    toggleForm: (status) => dispatch(toggleForm(status)),
  }
}

export const ContactsList = connect(mapStateToProps, mapDispatchToProps)(_ContactsList);