import React, { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div className="counter-app">
      <div className="counter-box">
        <h1>CREATIVE COUNTER</h1>
        <div className="count-display">
          <span>{count}</span>
        </div>
        <div className="buttons">
          <button onClick={decrement} className="button-decrement">-</button>
          <button onClick={increment} className="button-increment">+</button>
        </div>
      </div>
    </div>
  );
}

export default App;
