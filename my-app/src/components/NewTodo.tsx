import './NewTodo.css';

import React, { useRef } from 'react';

type NewTodoProps = {
    onAddTodo: (todoText: string) => void;
    todoColor: object;
  };
  
  const NewTodo: React.FC<NewTodoProps> = props => {
    const textInputRef = useRef<HTMLInputElement>(null);
  
    const todoSubmitHandler = (event: React.FormEvent) => {
      event.preventDefault();
      const enteredText = textInputRef.current!.value;
      if(enteredText==="") alert("🚫빈칸은 추가할 수 없어요🚫")
      else props.onAddTodo(enteredText);
    };
  
    return (
      <form onSubmit={todoSubmitHandler}>
        <div className="form-control">
          <input type="text" id="todo-text" ref={textInputRef} placeholder="오늘의 할일은?" />
        </div>
        <button style={props.todoColor} className='addBtn' type="submit">ADD TODO</button>
      </form>
    );
  };
  
  export default NewTodo;
  

