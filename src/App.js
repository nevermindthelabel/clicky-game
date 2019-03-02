import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from './components/Wrapper'
import Title from './components/Title'
import "./App.css";
import characterArray from "./characterArray";

export default class App extends Component {
  state = {
    characterArray
  };

  /* TODO
    get a random id number to be the target id
    compare target id number with the clicked id number
    if it is not the target id, increment user score
    shuffle characterArray onClick if it is not the target id
  */ 

  // shuffleArray = characterArray => {
  //     let i = characterArray.length - 1;
  //     for (; i > 0; i--) {
  //       const j = Math.floor(Math.random() * (i + 1));
  //       const temp = characterArray[i];
  //       characterArray[i] = characterArray[j];
  //       characterArray[j] = temp;
  //     }
  //     this.setState({ characterArray })
  //     // return array;
  //   }
 

  render() {
    return (
      <Wrapper>
        <Title>The Simpsons Characters</Title>
          {this.state.characterArray.map(character => (
            <CharacterCard
              shuffleArray={this.shuffleArray}
              id={character.id}
              key={character.id}
              image={character.image}
              name={character.name}
              onClick={() => console.log(`clicked`)}
              thisId={() => console.log(character.id)}
            />
          ))}
    </Wrapper>
    );
  }
}
