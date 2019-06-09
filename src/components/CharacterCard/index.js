import React from "react";
import "./style.css";

const CharacterCard = props => (
  <div onClick={() => props.shuffleArray(props.id)} className="card">
    <img
      data-id={props.id}
      src={props.image}
      alt={props.name}
      height="300"
      width="250"
    />
  </div>
);

export default CharacterCard;
