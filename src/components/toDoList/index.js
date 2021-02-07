import React from 'react';
import { connect } from 'react-redux';
import {Task, Empty} from '../task';

const mapState = state => ({
  todos: state.todos
});

const mapDispatch = dispatch => ({
  removeTask: value => dispatch({type: 'REMOVE_TASK', payload: value}),
  editTask: (index, text) => dispatch({type: 'EDIT_TASK', payload: {index, text}}),
  toggleTask: (value) => dispatch({type: 'COMPLETE_TOGGLE', payload: value})
});

const _TaskList = ({todos, removeTask, editTask, toggleTask}) => {
  return (
      <ul className="list-group">
        {todos.length > 0 && todos.map((todo, index) => <Task {...todo} index={index} key={index} onRemove={removeTask} onEdit={editTask} onToggle={toggleTask} />)}
        {todos.length === 0 && <Empty/>}
      </ul>
  );
}

export const TaskList = connect(mapState, mapDispatch)(_TaskList);