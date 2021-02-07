import {createStore} from 'redux';

function reducer(state, action) {
  let temp = '';
  switch (action.type) {
    case 'INPUT_CHANGE':
      return {
        ...state,
        inputValue: action.payload,
      };
    case 'ADD_TASK':
      return {
        ...state,
        inputValue: '',
        todos: state.todos.concat([{text: action.payload, completed: false}]),
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        todos: state.todos.filter((todo, index) => {
          return index !== action.payload;
        }),
      };
    case 'EDIT_TASK':
      return {
        ...state,
        inputValue: action.payload.text,
        editIndex: action.payload.index,
      };
    case 'SAVE_TASK':
      temp = state.todos;
      temp[state.editIndex] = {
        ...temp[state.editIndex],
        text: action.payload,
      };
      return {
        ...state,
        inputValue: '',
        editIndex: false,
        todos: [...temp],
      };
    case 'COMPLETE_TOGGLE':
      temp = state.todos;
      temp[action.payload].completed = !temp[action.payload].completed;
      return {
        ...state,
        todos: [...temp],
      };
    default:
      return state;
  }
}

let state = {
  inputValue: '',
  editIndex: false,
  todos: [],
};

export const store = createStore(reducer, state);