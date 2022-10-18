import React from "react";
import PasswordButton from "./PasswordButton";

function Form(userIsRegistered) {

  console.log(userIsRegistered);
  console.log(userIsRegistered.userIsRegistered);

  return (
    <form className="form">
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />

      {
        userIsRegistered.userIsRegistered ?  

        <PasswordButton 
            type= "hidden"
            btnvalue = "Login"
          /> 
        : 
        <PasswordButton 
          type = "password"
          btnvalue = "Register"
        />
      }
    </form>
  );
}

export default Form;
