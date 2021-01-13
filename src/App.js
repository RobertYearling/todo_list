import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Input from './components/Input';
import Todo from './components/Todo.jsx';


function App() {
  const [list, setList] = useState([]);
  return (
    <div className="App container" style={{ width: '600px'}}>
      <h1>To Do List:</h1>
      {list.map((todo, i) => (
        <Todo todo={todo} setList={setList} index={i} list={list} />
      ))}
      <Input list={list} setList={setList} />
    </div>
  );
};

export default App;
