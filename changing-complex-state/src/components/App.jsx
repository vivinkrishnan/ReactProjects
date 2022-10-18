import React, { useState } from "react";

function App() {

  //My method
  /*
    const [firstName, setFirstName] = useState("");
  const [lastName , setLastName] = useState("");

  const showFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const showLastName = (event) => {
    setLastName(event.target.value);
  }


  return (
    <div className="container">
      <h1>Hello {firstName} {lastName}</h1>
      <form>
        <input onChange={showFirstName} value={firstName} name="fName" placeholder="First Name" />
        <input onChange={showLastName} value={la} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );*/
  
  //Better method
  const [fullName, setFullName] = useState({
    fName: "",
    lName: ""
  });
  

  const handleChange = (event) => {
    
    const {value, name} = event.target;

    setFullName((prevValue) => {
      console.log(prevValue);
      if(name === 'fName'){
        return{
          fName: value,
          lName: prevValue.lName
        }
      }else if(name === 'lName'){
        return {
          fName: prevValue.fName,
          lName: value
        }
      }
    })

  }

  return (
    <div className="container">
      <h1>Hello {fullName.fName} {fullName.lName}</h1>
      <form>
        <input onChange={handleChange} value={fullName.fName} name="fName" placeholder="First Name" />
        <input onChange={handleChange} value={fullName.lName} name="lName" placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
