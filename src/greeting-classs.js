import React, {Component} from 'react';

class GreetingClass extends Component {
  render(props) {
    return (
        <div className="greeting-text">
          <div className="greeting-wrap">
            <span className="type-label class">Class</span>
            <div>Hello world</div>
          </div>
        </div>
    )
  }
}

export default GreetingClass;