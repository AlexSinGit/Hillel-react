import React from 'react';

class ContactEmpty extends React.Component{
  render(){
    return (
      <tr>
        <td colSpan={4} style={{textAlign: 'center'}}>Ни каких контактов пока не добавленно!</td>
      </tr>
    );
  }
}

export default ContactEmpty;