import React from "react";
import ReactDOM from "react-dom";
import render from "react-dom";
import {createRoot} from "react-dom/client";
import App from "./components/App";


const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);

//ReactDOM.render(<App />, document.getElementById("root"));

//Challenge. Render all the notes inside notes.js as a seperate Note
//component.
