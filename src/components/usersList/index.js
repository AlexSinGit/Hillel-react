import './style.scss';
import React from 'react';

class UsersList extends React.Component {


  constructor(props) {
    super(props);
    this.showAddNewUserForm = this.showAddNewUserForm.bind(this);
  }

  showAddNewUserForm(){
    this.props.onAddUser();
  }

  render(){
    let users = this.props.users;
    return (
        <div className="list-wrap">
          <ul className="list-group w-100">
            {users.length > 0 && users.map((user) => {
              return <li className="list-group-item" key={user.id} onClick={() => {this.props.onUserClick(user)}}>{user.firstName} {user.lastName}</li>
            })}
            {users.length === 0 && <li className="list-group-item empty" disabled={true}>Пользователей пока нет!</li>}
          </ul>
          <button className="d-flex w-100 mt-auto" onClick={this.showAddNewUserForm}>Добавить пользователя</button>
        </div>
    );
  }
}

export default UsersList;