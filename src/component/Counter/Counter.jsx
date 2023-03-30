import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 3);
  };

  const handleDecrement = () => {
    setCount(prevCount => prevCount - 3);
  };

  return (
    <div className="card">
      <h2>Counter</h2>
      <div className="count">{count}</div>
      <div className="buttons">
        <button onClick={handleIncrement}>+3</button>
        <button onClick={handleDecrement}>-3</button>
      </div>
    </div>
  );
}

export default Counter;