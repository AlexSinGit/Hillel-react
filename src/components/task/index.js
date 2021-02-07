import './styles.scss';
import React from 'react';

const Task = ({text, completed, index, onRemove, onEdit, onToggle}) => {
  return (
      <li className={'list-group-item ' + (completed ? 'completed': '') }>
        <input className="form-check-input me-1 mr-3" type="checkbox" onChange={() => {onToggle(index);} }/>
        <span>{text}</span>
        <div className="btn-group" role="group">
          <button className="btn btn-outline-primary btn-sm" onClick={ () => {onEdit(index, text);} }>Изменить</button>
          <button className="btn btn-outline-primary btn-sm" onClick={ () => {onRemove(index);} }>Удалить</button>
        </div>
      </li>
  );
}

const Empty = () => {
  return (
      <li className="list-group-item disabled text-center empty">
        Ни одной задачи пока не добавленно!
      </li>
  );
}

export {Task, Empty};