import React, { useState } from "react";

function App() {

  let time = new Date().toLocaleTimeString();
  console.log(time);

  const [currTime, setState] = useState(time);

  const increaseTime = () => {
    setState(new Date().toLocaleTimeString());
  }

  //setInterval(increaseTime,1000);

  return (
    <div className="container">
      <h1>{currTime}</h1>
      <button onClick={increaseTime}>Get Time</button>
    </div>
  );
}

export default App;
