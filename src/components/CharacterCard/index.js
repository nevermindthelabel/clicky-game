import React from 'react';
import './style.css';

export default function CharacterCard(props) {
  // console.log(props);
  return (
    <div onClick={props.thisId} className="card">
      <img 
        src={props.image}
        alt={props.name}
        height="300"
        width="250"
      />
    </div>
  );
}
