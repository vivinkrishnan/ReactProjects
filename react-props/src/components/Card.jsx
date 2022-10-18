import React from "react";

function Card(details){

    return(
        <div>
            <h2>{details.name}</h2>
            <p>{details.contact}</p>
            <p>{details.email}</p>
        </div>
        
    );

}

export default Card;