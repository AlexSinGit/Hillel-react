import React from 'react';

const GreetingFunc = function(props){
  return (
      <div className="greeting-text">
        <div className="greeting-wrap">
          <span className="type-label func">Function</span>
          <div>Hello world</div>
        </div>
      </div>
  )
}

export default GreetingFunc;