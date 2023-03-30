import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Todos.css';

function Todos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('https://gorest.co.in/public/v1/todos')
      .then(response => {
        setTodos(response.data.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="grid">
      {todos.map(todo => (
        <div className="card" key={todo.id}>
          <h3>{todo.title}</h3>
          <p>Status: {todo.completed ? 'Completed' : 'Incomplete'}</p>
        </div>
      ))}
    </div>
  );
}

export default Todos;