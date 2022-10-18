// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars, { carDetails } from "../src/practice";
// import animals, { makeSound } from "./data";

// const [cat , dog] = animals;
// console.log(cat);
// console.log(dog);

// const [animalname, getSound] = makeSound(cat);
// getSound(cat);

// const {name,sound , feedingRequirement : {food,water} } = cat;
// console.log(name);
// console.log(sound);
// console.log(food);
// console.log(water);




const [honda, tesla] = cars;
 console.log(honda);


//const [hondaTopColour, hondaTopSpeed] = carDetails(honda);
//const [teslaTopColour,teslaTopSpeed] = carDetails(tesla);

const {speedStats: {topSpeed : hondaTopSpeed}} = honda;
const {speedStats: {topSpeed : teslaTopSpeed}} = tesla;

const {coloursByPopularity: [hondaTopColour,hondaSecondColour]} = honda;
const {coloursByPopularity: [teslaTopColour]} = tesla;

console.log(hondaSecondColour);

ReactDOM.render(
  <table>
    <tr>
      <th>Brand</th>
      <th>Top Speed</th>
    </tr>
    <tr>
      <td>{tesla.model}</td>
      <td>{teslaTopSpeed}</td>
      <td>{teslaTopColour}</td>
    </tr>
    <tr>
      <td>{honda.model}</td>
      <td>{hondaTopSpeed}</td>
      <td>{hondaTopColour}</td>
    </tr>
  </table>,
  document.getElementById("root")
); 
