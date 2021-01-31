import './style.scss';
import React from 'react';

class UserInfo extends React.Component {

  state = {
    user: false
  }

  constructor(props) {
    super(props);
    this.editUser = this.editUser.bind(this);
    this.removeUser = this.removeUser.bind(this);
  }

  static getDerivedStateFromProps(newProps, state){
    if(newProps.user){
      return {
        user: {
          ...newProps.user
        }
      }
    }else{
      return null;
    }
  }

  editUser(){
    this.props.onClickEdit(this.state.user);
  }

  removeUser(){
    this.props.onRemoveUser(this.state.user.id);
  }

  render() {
    let user = this.state.user;
    return (
        <div className="user-info-wrap">
          <div className="avatar">{user.firstName[0]}{user.lastName[0]}</div>
          <h3>{user.firstName}&nbsp;{user.lastName}</h3>
          <div className="actions">
            <button className="btn btn-success" onClick={this.editUser}>Редактировать</button>
            <button className="btn btn-danger" onClick={this.removeUser}>Удалить</button>
          </div>
        </div>
    )
  }

}

export default UserInfo;