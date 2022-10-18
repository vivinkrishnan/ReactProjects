import React, { useState } from "react";

function App() {

  const [handleText, setHandleText] = useState("Hello");
  const [isMouseOver, setMouseOver] = useState(false);

  function handleClick(){
      setHandleText("Clicked");
  }

  function mouseOver(){
     setMouseOver(true);     
  }

  function mouseOut(){
    setMouseOver(false);
  }

  return (
    <div className="container">
      <h1>{handleText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button id="btn" style={{backgroundColor: isMouseOver ? "black" : "white" }} onMouseOut={mouseOut} onMouseOver={mouseOver} onClick={handleClick} >Submit</button>
    </div>
  );
}

export default App;
