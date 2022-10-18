import React from "react";
import Card from "./Card";
import contacts from "../contacts";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card contact={contacts[0]} />
      <Card contact={contacts[1]} />
      <Card contact={contacts[2]} />
    </div>
  );
}

export default App;
