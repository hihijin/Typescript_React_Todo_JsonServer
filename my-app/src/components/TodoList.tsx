import './TodoList.css';

import React from 'react';

import { MdRemoveCircleOutline } from 'react-icons/md';

interface TodoListProps {
  items: { id: string; text: string }[];
  onDeleteTodo: (id: string) => void;
  lengthColor:object;
}

const TodoList: React.FC<TodoListProps> = props => {
  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>
          <span>{todo.text}</span>
          <button className='deleteBtn' onClick={props.onDeleteTodo.bind(null, todo.id)}>
          <MdRemoveCircleOutline style={props.lengthColor}/>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
