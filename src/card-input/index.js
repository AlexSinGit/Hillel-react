import './style.scss';
import React from 'react';
import cardIcon from '../images/credit-card-regular.svg';

class CardInput extends React.Component {
  cardGroup = React.createRef();
  currentInput;
  currentInputNum = 0;
  inputs;
  cardNum = [];

  constructor(props) {
    super(props);
    if(props.cardNum.length > 0){
      this.cardNum = ([] = props.cardNum.match(/.{1,4}/g));
    }
  }

  setValuesToInputs(){
    this.cardNum.forEach((value, index) => {
      this.inputs[index].value = value;
    });
  }

  setFocusInput(num) {
    this.currentInput = this.inputs[num];
    this.currentInput.focus();
  }

  checkCardNumLen(){
    let index = Math.trunc(this.cardNum.join('').length / 4);
    if(index > this.inputs.length -1){
      index = this.inputs.length -1;
    }
    this.currentInput = this.inputs[index];
    this.currentInput.focus();
  }

  checkInputLen() {
    let newElement = this.currentInput;
    if (this.currentInput.value.length >= 4) {
      let next = this.currentInput.nextElementSibling;
      if (next && next.nodeName === 'INPUT') {
        newElement = next;
      }

    }
    if (this.currentInput.value.length === 0) {
      let prev = this.currentInput.previousElementSibling;
      if (prev && prev.nodeName === 'INPUT') {
        newElement = prev;
      }
    }

    this.currentInput = newElement;

    this.currentInput.focus();
  }

  componentDidMount() {
    this.inputs = this.cardGroup.current.querySelectorAll('input');
    this.setFocusInput(this.currentInputNum);
    if(this.cardNum.join('').length > 0) {
      this.setValuesToInputs();
      this.checkCardNumLen();
      this.props.setCardNum(this.cardNum.join(''));
    }
  }

  onClickHandler() {
    this.checkCardNumLen();
  }

  onInputHandler(e) {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    this.cardNum[Array.from(this.inputs).indexOf(e.target)] = e.target.value;
    this.props.setCardNum(this.cardNum.join(''));
    this.checkInputLen();
  }

  onKeyDownHandler(e) {
    e.stopPropagation();
    if(e.keyCode !== 8) {
      this.checkCardNumLen();
    }

    if(e.keyCode === 8 && this.currentInput.length === 0){
      this.checkCardNumLen();
    }
  }

  render() {
    return (
        <div className="input-group" ref={this.cardGroup}>
          <div className="input-group-prepend">
                    <span className="input-group-text">
                      <img src={cardIcon} alt="card" width="38px"
                           height="38px"/>
                    </span>
          </div>
          <input type="text" className="form-control" maxLength={4}
                 onClick={this.onClickHandler.bind(this)}
                 onInput={this.onInputHandler.bind(this)}
                 onKeyUp={this.onKeyDownHandler.bind(this)}/>
          <input type="text" className="form-control" maxLength={4}
                 onClick={this.onClickHandler.bind(this)}
                 onInput={this.onInputHandler.bind(this)}
                 onKeyUp={this.onKeyDownHandler.bind(this)}/>
          <input type="text" className="form-control" maxLength={4}
                 onClick={this.onClickHandler.bind(this)}
                 onInput={this.onInputHandler.bind(this)}
                 onKeyUp={this.onKeyDownHandler.bind(this)}/>
          <input type="text" className="form-control" maxLength={4}
                 onClick={this.onClickHandler.bind(this)}
                 onInput={this.onInputHandler.bind(this)}
                 onKeyUp={this.onKeyDownHandler.bind(this)}/>
        </div>
    );
  }
}

export default CardInput;