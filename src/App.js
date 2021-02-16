import './App.scss';
import React from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';

class App extends React.Component {

  render() {
    return (
        <div className="page-wrap">
          <Navbar/>
          <Content/>
        </div>
    );
  }
}

export default App;
