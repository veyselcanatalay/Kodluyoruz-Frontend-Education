/* eslint-disable prettier/prettier */
import { useState, useEffect } from 'react';
import './App.css';
import Footer from './components/Todos/Footer';
import Form from './components/Todos/Form';
import TodoList from './components/Todos/TodoList';

function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    filteredHandler();
  }, [todos, status]);

  //Function
  const filteredHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.completed === true));
        break;

      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.completed === false));
        break;

      default:
        setFilteredTodos(todos);
        break;
    }
  };
  return (
    <div className="App">
      <div className="todoapp">
        <header>
          <h1>React Todo</h1>
        </header>
        <Form
          inputText={inputText}
          todos={todos}
          setTodos={setTodos}
          setInputText={setInputText}
          setStatus={setStatus}
          filteredTodos={filteredTodos}
        />

        <TodoList setTodos={setTodos} todos={todos} filteredTodos={filteredTodos} />
      </div>

      <Footer setStatus={setStatus} />
    </div>
  );
}

export default App;
