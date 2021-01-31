import './styles.scss';
import React from 'react';

class Form extends React.Component{

  state = {
    isEdit: false,
    user: {
      id: false,
      firstName: '',
      lastName: ''
    }
  }

  static getDerivedStateFromProps(newProps, state){
    if(newProps.editUser !== false && state.isEdit === false){
      return {
        isEdit: true,
        user: {
          ...newProps.editUser
        }
      }
    }else{
      return null;
    }
  }




  constructor(props) {
    super(props);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onAddUser = this.onAddUser.bind(this);
    this.cancel = this.cancel.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
    this.saveEditUser = this.saveEditUser.bind(this);
  }

  onChangeHandler(e){
    let user = this.state.user;
    user[e.target.name] = e.target.value;
    this.setState({
      user: user
    })
  }

  onAddUser(){
    if(typeof this.props.onAdd === 'function') {
      this.props.onAdd(this.state.user);

      this.setState({
        user: {
          firstName: '',
          lastName: ''
        }
      })
    }
  }

  cancel(){
    this.props.onCancelAddUser();
  }

  cancelEdit() {
    this.props.onClearEdit(() => {
      this.setState({
        isEdit: false,
        user: {
          firstName: '',
          lastName: ''
        }
      });
    });
  }

  saveEditUser() {
    this.props.onSaveEditUser(this.state.user);
  }

  render() {
    let user = this.state.user;
    return (
        <div className="form-wrap">
          <div className="input-group mb-3">
            <span className="input-group-text">Имя</span>
            <input type="text" className="form-control" name="firstName" value={user.firstName} onChange={this.onChangeHandler}
                   aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="input-group mb-3">
            <span className="input-group-text">Фамилия</span>
            <input type="text" className="form-control" name="lastName" value={user.lastName} onChange={this.onChangeHandler}
                   aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          <div className="actions-wrap d-flex">
            {!this.state.isEdit && <button className="btn btn-success" onClick={this.onAddUser}>Добавить</button>}
            {!this.state.isEdit && <button className="btn btn-secondary" onClick={this.cancel}>Отмена</button>}
            {this.state.isEdit && <button className="btn btn-success" onClick={() => {this.saveEditUser(); this.cancelEdit()}}>Сохранить</button>}
            {this.state.isEdit && <button className="btn btn-secondary" onClick={this.cancelEdit}>Отмена</button>}
          </div>
        </div>
    );
  }
}

export default Form;