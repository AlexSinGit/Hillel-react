import './style.scss';
import React from 'react';
import UsersList from '../usersList'
import Form from '../form';
import UserInfo from '../userInfo';

class UsersFetcher extends React.Component{

  url = 'https://6015c49055dfbd00174ca8ec.mockapi.io/alex/';

  state = {
    users: [],
    editUser: false,
    showForm: false,
    userInfo: false
  }

  constructor(props) {
    super(props);
    this.addUser = this.addUser.bind(this);
    this.onUserClickEdit = this.onUserClickEdit.bind(this);
    this.onClearEditUser = this.onClearEditUser.bind(this);
    this.editUser = this.editUser.bind(this);
    this.showUserInfo = this.showUserInfo.bind(this);
    this.onAddNewUser = this.onAddNewUser.bind(this);
    this.onCancelAddUser = this.onCancelAddUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  componentDidMount() {
    this.fetchUsers();
  }

  async fetchUsers(){
    const response = await fetch(this.url + 'Users');

    const data = await response.json();

    this.setState({
      users: data
    });
  }

  async addUser({firstName, lastName}) {
    await fetch(this.url + 'Users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firstName, lastName })
    });

    this.setState({
      showForm: false,
      editUser: false,
      userInfo: false
    });

    await this.fetchUsers();
  }

  async editUser({id, firstName, lastName}){
    if(id) {
      await fetch(this.url + 'Users/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({firstName, lastName})
      });

      this.setState({
        userInfo: {id, firstName, lastName}
      });

      await this.fetchUsers();
    }
  }

  onUserClickEdit(user){
    this.setState({
      showForm: true,
      editUser: user
    });
  }

  onClearEditUser(callback){
    this.setState({
      editUser: false,
      showForm: false
    }, callback);
  }

  showUserInfo(user){
    this.setState({
      userInfo: user,
      showForm: false
    });
  }

  onCancelAddUser(){
    this.setState({
      showForm: false,
      editUser: false,
      userInfo: false
    });
  }

  onAddNewUser(){
    this.setState({
      showForm: true,
      userInfo: false,
      editUser: false,
    });
  }

  async removeUser(id) {
    await fetch(this.url + 'Users/' + id, {
      method: 'DELETE'
    });

    this.setState({
      userInfo: false
    });

    await this.fetchUsers();
  }


  render() {
    let users = this.state.users;
    let editUser = this.state.editUser;
    return (
        <div className="content-wrap">
          <div className="container">
            <div className="row no-gutters">
              <div className="col-4">
                <UsersList users={users} onUserClick={this.showUserInfo} onAddUser={this.onAddNewUser}/>
              </div>
              <div className="col-8">
                {this.state.showForm && <Form
                    onAdd={this.addUser}
                    editUser={editUser}
                    onClearEdit={this.onClearEditUser}
                    onSaveEditUser={this.editUser}
                    onCancelAddUser={this.onCancelAddUser}
                />}
                {!this.state.showForm &&
                this.state.userInfo &&
                <UserInfo user={this.state.userInfo} onClickEdit={this.onUserClickEdit} onRemoveUser={this.removeUser} />
                }
                {
                  !this.state.showForm &&
                  !this.state.userInfo &&
                  <div className="select-user text-center">Выбирите пользователя для просмотра информации о нем.</div>
                }
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default UsersFetcher;