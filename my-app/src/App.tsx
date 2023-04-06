import './App.css';

import React, {
  useEffect,
  useState,
} from 'react';

import NewTodo from './components/NewTodo';
import Profile from './components/Profile';
import TodoList from './components/TodoList';
import { Todo } from './todo.model';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  
  //localstorage
  /*
  const [todos, setTodos] = useState<Todo[]>(() => 
  JSON.parse(window.localStorage.getItem("todos")!) || []);
  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);*/

  // useEffect를 사용하여 컴포넌트가 처음 렌더링 될 때, 서버에서 todo를 받아와 상태로 설정
  useEffect(() => {
    fetch("http://localhost:3001/todos")
      .then((response) => response.json())
      .then((data) => setTodos(data));
  }, []);

  //todo추가 함수
  const todoAddHandler = (text: string) => {
    //setTodos(prevTodos => [...prevTodos, {id: Math.random().toString(), text: text}]);

    fetch("http://localhost:3001/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({id: Math.random().toString(), text: text}), // 새로운 항목을 JSON형식으로 변환하여 바디로 보냄
    })
      .then((response) => response.json()) //응답을 받았다면, JSON 데이터를 파싱
      .then((data) => setTodos([...todos, data])); //todo 항목 배열에 추가
  };

  //todo삭제 함수
  const todoDeleteHandler = (todoId: string) => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.id !== todoId);
    });

    //해당 url을 fetch하여 삭제시킴
    fetch(`http://localhost:3001/todos/${todoId}`, {
      method: "DELETE",
    });
  };


  const[todoColor, settodoColor] = useState({backgroundColor:"RGB(224 106 140)"});
  const[boxColor, setBoxColor] = useState({backgroundColor:"#F8DBE4"});
  const[lengthColor, setlengthColor] = useState({color:"RGB(224 106 140)"});
  const btnClickHandler = () => {
    settodoColor({backgroundColor:"#913CFF"});
    setBoxColor({backgroundColor:"#efe3ff"});
    setlengthColor({color:"#913CFF"});
  }
  const btnClickRHandler = () => {
    settodoColor({backgroundColor:"RGB(224 106 140)"});
    setBoxColor({backgroundColor:"#F8DBE4"});
    setlengthColor({color:"RGB(224 106 140)"});
  }

  return (
    <div className="App">
      <Profile btnClickHandler={btnClickHandler} btnClickRHandler={btnClickRHandler} />
      <div style={boxColor} className='todoBox'>
        <div className='todoLength'>할 일 <span className='num' style={lengthColor}>{todos.length}</span>개 남았어요</div>
        <NewTodo todoColor={todoColor} onAddTodo={todoAddHandler}/>
        <TodoList items={todos} onDeleteTodo={todoDeleteHandler} lengthColor={lengthColor} />
      </div>
    </div>
  );
};

export default App;
