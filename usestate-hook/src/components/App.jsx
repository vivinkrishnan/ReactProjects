import React, { useState } from "react";

function App() {

  const [count, setState ] = useState(0);

  const increaseCount = () => {
      setState(count + 1);
  }

  const decreaseCount = () => {
    setState(count - 1);
}

  return (
      <div className="container">
        <h1>{count}</h1>
        <button onClick={increaseCount}>+</button>
        <button onClick={decreaseCount}>-</button>
      </div>
  );
}

export default App;
