import React from 'react';
import { connect } from 'react-redux';

const mapState = state => ({
  inputValue: state.inputValue,
  editIndex: state.editIndex
});

const mapDispatch = dispatch => ({
  inputChange: value => dispatch({ type: 'INPUT_CHANGE', payload: value}),
  addTask: value => dispatch({type: 'ADD_TASK', payload: value}),
  saveTask: value => dispatch({type: 'SAVE_TASK', payload: value})
});

const _TaskInput = ({inputValue, editIndex, inputChange, addTask, saveTask, ...rest}) => {

  const keyPressHandler = (e) => {
    if(e.charCode === 13 && inputValue.trim().length > 0){
      if(editIndex === false) {
        addTask(inputValue);
      }else{
        saveTask(inputValue);
      }
    }
  }

  const addClickHandler = () => {
    if(inputValue.trim().length > 0) {
      addTask(inputValue);
    }
  }

  const saveClickHandler = () => {
    if(inputValue.trim().length > 0) {
      saveTask(inputValue);
    }
  }

  return (
      <div className="input-group mb-3 mt-3">
        <input
            type="text"
            className="form-control"
            {...rest} value={inputValue}
            placeholder="Текст задачи..."
            onKeyPress={keyPressHandler}
            onChange={(e) => inputChange(e.target.value)}
        />
        {editIndex === false && <button className="btn btn-outline-secondary" type="button" onClick={addClickHandler}>
          Добывить
        </button>}
        {editIndex !== false && <button className="btn btn-outline-secondary" type="button" onClick={saveClickHandler}>
          Сохранить
        </button>}
      </div>
  );
}

export const TaskInput = connect(mapState, mapDispatch)(_TaskInput);