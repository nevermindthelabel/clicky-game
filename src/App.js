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

  render() {
    return (
      // <div className="App">
      //   <header className="App-header">
      <Wrapper>
        <Title>The Simpsons Characters</Title>
          {this.state.characterArray.map(character => (
            <CharacterCard
              id={character.id}
              key={character.id}
              image={character.image}
              name={character.name}
              onClick={() => console.log(`clicked`)}
              thisId={() => console.log(character.id)}
            />
          ))}
    </Wrapper>
        /* </header> */
      /* </div> */
    );
  }
}
