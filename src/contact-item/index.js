import React from 'react';

class ContactItem extends React.Component {

  removeContact(e){
    console.log(this);
    this.props.removeCallaback(this.props.index);
  }

  render(){
    return (
        <tr>
          <td>{this.props.contact.firstName}</td>
          <td>{this.props.contact.lastName}</td>
          <td>{this.props.contact.phone}</td>
          <td><button className="btn btn-danger" onClick={this.removeContact.bind(this)}>Удалить</button></td>
        </tr>
    )
  }
}

export default ContactItem;