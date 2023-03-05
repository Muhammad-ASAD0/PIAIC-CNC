import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

//   const decrement = () => {
//     setCount(count - 1);
//   };

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <div className="container">
      <h1 className="text-center my-5">Counter App</h1>
      <div className="d-flex justify-content-center">
        <Button variant="danger" onClick={decrement} className="mx-3">
          -
        </Button>
        <h1>{count}</h1>
        <Button variant="success" onClick={increment} className="mx-3">
          +
        </Button>
      </div>
    </div>
  );
}

export default Counter;