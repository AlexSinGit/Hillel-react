import './App.scss';
import React from 'react';
import ContactTable from './contact-table';
import ContactFrom from './contact-form';

class App extends React.Component {

  state = {
    addContactActive: true,
    formVisible: false,
    contacts: this.initStartContactsList()
  }

  initStartContactsList(){
    let contactsString = localStorage.getItem('contacts');
    if(contactsString === null){
      return [];
    }else{
      return JSON.parse(contactsString);
    }
  }

  formToggle(){
    this.setState({
      formVisible: !this.state.formVisible,
      addContactActive: !this.state.addContactActive
    });
  }

  addContact({firstName, lastName, phone}){
    let contacts = this.state.contacts;

    contacts.push({
      firstName,
      lastName,
      phone
    });

    this.setState({
      contacts: contacts
    });

    this.formToggle();
  }

  removeContact(_index){
    let contacts = this.state.contacts;
    this.setState({
      contacts: contacts.filter((item, index) => {
        return (_index !== index) ? item : false;
      })
    }, () => {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    });
  }

  render() {
    let form;
    if(this.state.formVisible) {
      form = <ContactFrom addCallback={this.addContact.bind(this)}
                          closeCallback={this.formToggle.bind(this)}/>

    }else{
      form = false;
    }
    return (
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="card mt-2">
                <ContactTable contacts={this.state.contacts} removeCallback={this.removeContact.bind(this)}/>
              </div>
              <button disabled={!this.state.addContactActive} className="btn btn-primary mt-3 mb-3" onClick={this.formToggle.bind(this)}>Добавить контакт</button>
              { form }
            </div>
          </div>
        </div>
    )
  }
}

export default App;
