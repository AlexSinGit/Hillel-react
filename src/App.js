import './App.scss';
import React from 'react';
import {TaskInput} from './components/taskInput';
import {TaskList} from './components/toDoList';

class App extends React.Component {

  render() {
    return (
        <div className="container">
          <div className="row">
            <div className="col-5 mx-auto">
              <TaskInput/>
              <TaskList />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
