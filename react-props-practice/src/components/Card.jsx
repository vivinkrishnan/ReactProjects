import React from "react";
import Detail from "./Detail";

function Card(contact){

    return (
        <div>
          <div className="card">
            <div className="top">
              <h2 className="name">{contact.contact.name}</h2>
              <img className="circle-img"
                src={contact.contact.imgURL}
                alt="avatar_img"
              />
            </div>
            <div className="bottom">
              <Detail detail={contact.contact.phone}/>
              <Detail detail={contact.contact.email}/>
            </div>
          </div>
        </div>
      );
}

export default Card;