import React from "react";
import "./card-list-styles/card-list.css";
import Card from "../card/Card.component";

const Cards = (props) => {
  console.log(props);
  return (
    <div className="card-list">
      {props.persons.map((person) => {
        return <Card key={person.id} person={person} />;
      })}
    </div>
  );
};

export default Cards;
