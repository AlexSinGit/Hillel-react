import './App.scss';
import React from 'react';
import CardInput from './card-input';

class App extends React.Component {

  state = {
    cardNumber: '',
    sendDisabled: true
  }

  setCardNum(num){
    this.setState({
      cardNumber: num
    }, () => {
      this.setState({
        sendDisabled: this.state.cardNumber.length !== 16
      });
    });
  }

  sendCardNumber(){
    alert(this.state.cardNumber);
  }

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-6 mx-auto">
              <div className="card-wrapper">
                <CardInput cardNum={this.state.cardNumber} setCardNum={this.setCardNum.bind(this)}/>
                <button disabled={this.state.sendDisabled} className="btn btn-primary mt-4 send-button" onClick={this.sendCardNumber.bind(this)}>
                  <b>Send</b>
                </button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default App;
