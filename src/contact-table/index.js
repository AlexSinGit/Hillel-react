import React from 'react';
import ContactItem from '../contact-item';
import ContactEmpty from '../contact-empty';

class ContactTable extends React.Component {
  render() {
    return (
        <table className="table">
          <thead>
          <tr>
            <th scope="col">Имя</th>
            <th scope="col">Фамилия</th>
            <th scope="col">Телефон</th>
            <th scope="col">Действия</th>
          </tr>
          </thead>
          <tbody>
          {
            this.props.contacts.length > 0 && this.props.contacts.map((contact, index) => {
              return <ContactItem contact={contact} index={index} key={index} removeCallaback={this.props.removeCallback}/>
            })
          }
          {
            this.props.contacts.length === 0 && <ContactEmpty/>
          }
          </tbody>
        </table>
    );
  }
}

export default ContactTable;