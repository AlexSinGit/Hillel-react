import React from 'react';
import {ContactsList} from './ContactsList';

class Contacts extends React.Component{
  render(){
    return (
        <div className="content-wrap">
          <h3>Контакты</h3>
          <ContactsList/>
        </div>
    )
  }
}

export default Contacts;