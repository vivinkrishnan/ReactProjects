import React, { useState } from "react";

function App() {

  const [name, setName] = useState("");
  const [headingText, setheadingText] = useState("");

  const changeText = (event) => {
    setName(event.target.value);
  }

  const setH1Name = (event) => {
     setheadingText(name);
     //To handle form - to prevent default form behaviour of refreshing itself.
     event.preventDefault();
  }
  // //Without Form
  // return (
  //   <div className="container">
  //     <h1>Hello {headingText}</h1>
  //     <input onChange={changeText} value={name} type="text" placeholder="What's your name?" />
  //     <button onClick={setH1Name}>Submit</button>
  //   </div>
  // );

  //With Form
  return (
    <div className="container">
      <h1>Hello {headingText}</h1>
      <form onSubmit={setH1Name}>
        <input onChange={changeText} value={name} type="text" placeholder="What's your name?" />
        <button type="submit">Submit</button>
      </form>
      
    </div>
  );
}

export default App;
