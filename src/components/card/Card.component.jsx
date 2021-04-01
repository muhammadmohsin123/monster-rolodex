import React from "react";
import "./card.style.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img
        alt="persons"
        src={`https://robohash.org/${props.person.id}?set=&size=180x180`}
      />
      <h1>{props.person.name}</h1>
      <p>{props.person.email}</p>
    </div>
  );
};

export default Card;
