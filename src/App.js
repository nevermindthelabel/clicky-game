import React, { useState } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";
import characterArray from "./characterArray";

const App = props => {
  const [score, setScore] = useState(0);

  const [maxScore, setMaxScore] = useState(0);

  const [clickedArray, setClickedArray] = useState([]);

  const handleIncrement = () => {
    setScore(score + 1);
    if (score >= maxScore) {
      setMaxScore(maxScore + 1);
    }
  };

  const startGame = () => {
    setScore(0);
    setMaxScore(maxScore);
    setClickedArray([]);
  };

  const shuffleArray = id => {
    setClickedArray([
      ...clickedArray,
      id
    ]);

    if (clickedArray.indexOf(id) !== -1) {
      startGame();
    } else {
      handleIncrement();
      let lastIndex = characterArray.length - 1;
      for (; lastIndex > 0; lastIndex--) {
        const randomIndex = Math.floor(Math.random() * (lastIndex + 1));
        const temp = characterArray[lastIndex];
        characterArray[lastIndex] = characterArray[randomIndex];
        characterArray[randomIndex] = temp;
      }
    }
  };


  console.log(score, setScore);
  console.log(maxScore, setMaxScore);
  console.log(clickedArray, setClickedArray);

  return (
    <Wrapper>
      <Title>
        The Simpsons Characters
        <p>
          score: {score} Top score: {maxScore}{" "}
        </p>
      </Title>
      {characterArray.map(character => (
        <CharacterCard
          shuffleArray={shuffleArray}
          id={character.id}
          key={character.id}
          image={character.image}
          name={character.name}
        />
      ))}
    </Wrapper>
  );
};

export default App;
