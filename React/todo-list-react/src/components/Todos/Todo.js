/* eslint-disable react/prop-types */
import React from 'react';
import './Todo.css';

// eslint-disable-next-line react/prop-types
function Todo({ text, todo, todos, setTodos }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completeHandler = () => {
    setTodos(
      // eslint-disable-next-line react/prop-types
      todos.map((item) => {
        // eslint-disable-next-line react/prop-types
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    );
  };

  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <div className="todo">
      // eslint-disable-next-line react/prop-types
      <div className={`todo-item${todo.completed ? '-completed' : ''}`}>
        <input type="radio" onClick={completeHandler} className="complete-btn" />
        {text}
        <button onClick={deleteHandler} className="complete-btn">
          {' '}
          X{' '}
        </button>
      </div>
    </div>
  );
}

export default Todo;
