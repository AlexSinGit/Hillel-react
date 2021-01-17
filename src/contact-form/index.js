import React from 'react';
import './styles..scss';

class ContactFrom extends React.Component {

  state = {
    firstName: '',
    lastName: '',
    phone: '+380',
    validation: {
      firstNameValid: false,
      lastNameValid: false,
      phoneValid: false,
    },
    formDirty: false
  }

  checkFromStatus(){
    let status = Object.values(this.state.validation);
    return status.indexOf(false);
  }

  nameValidation(key){
    let validKey = `${key}Valid`;
    let validation = this.state.validation;

    if(this.state[key].trim().length > 2){
      validation[validKey] = true;
    }else{
      validation[validKey] = false;
    }

    this.setState({ validation: validation });

    this.checkFromStatus();
  }

  firstNameHandler(e){
    if(!this.state.formDirty){
      this.setState({
        formDirty: true
      });
    }

    this.setState({
      firstName: e.target.value.trim()
    }, () => {
      this.nameValidation('firstName');
    });
  }

  lastNameHandler(e){
    if(!this.state.formDirty){
      this.setState({
        formDirty: true
      });
    }

    this.setState({
      lastName: e.target.value.trim()
    }, () => {
      this.nameValidation('lastName');
    });
  }

  phoneValidation(){
    let phoneReEx = /^(\+380)?(67|68|96|97|98|50|66|95|99|63|73|93|89|94)[0-9]{7}$/;
    let filedStatus = false;
    let validation = this.state.validation;
    filedStatus = phoneReEx.exec(this.state.phone) !== null;

    validation.phoneValid = filedStatus;

    this.setState({
      validation: validation
    });

    this.checkFromStatus();
  }

  phoneNumberHandler(e){
    if(!this.state.formDirty){
      this.setState({
        formDirty: true
      });
    }

    this.setState({
      phone: e.target.value.trim()
    }, this.phoneValidation);
  }

  sendForm(){
    this.props.addCallback(this.state);
  }


  render() {
    let phoneInValidClass = (!this.state.validation.phoneValid && this.state.formDirty) ? 'in-valid' : '';
    let firstInValidClass = (!this.state.validation.firstNameValid && this.state.formDirty) ? 'in-valid' : '';
    let lastInValidClass = (!this.state.validation.lastNameValid && this.state.formDirty) ? 'in-valid' : '';
    return (
        <div className="card mt-2 p-3">
          <div className="mt-2 mb-2">
            <label htmlFor="first-name-input"
                   className="form-label">Имя</label>
            <input type="text" value={this.state.firstName} onChange={this.firstNameHandler.bind(this)}
                   className={`form-control ${firstInValidClass}`} id="first-name-input" required={true}
            />
          </div>
          <div className="mt-2 mb-2">
            <label htmlFor="last-name-input"
                   className="form-label">Фамилия</label>
            <input type="text" value={this.state.lastName} onChange={this.lastNameHandler.bind(this)}
                   className={`form-control ${lastInValidClass}`} id="last-name-input" required={true}
            />
          </div>
          <div className="mt-2 mb-2">
            <label htmlFor="phone-number-input"
                   className="form-label">Телефон</label>
            <input type="phone" className={`form-control ${phoneInValidClass}`} value={this.state.phone}
                   onChange={this.phoneNumberHandler.bind(this)} id="phone-number-input" required={true}
            />
          </div>
          <div className="mt-2 mb-2 contact-from-buttons">
            <button disabled={this.checkFromStatus() !== -1} className="btn btn-success mt-2"
                    onClick={this.sendForm.bind(this)}>
              Сохранить
            </button>
            <button className="btn btn-danger mt-2" onClick={this.props.closeCallback}>
              Отмена
            </button>
          </div>
        </div>
    );
  }
}

export default ContactFrom;