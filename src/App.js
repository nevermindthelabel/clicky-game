import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";
import characterArray from "./characterArray";

export default class App extends Component {
  state = {
    characterArray
  };

  componentDidMount() {
    this.shuffleArray()
  }

  /* TODO
    
    images get shuffled
    images get displayed
    score = 0
    topScore = 0
    if user clicks an image
    the...
    the score goes up by 1

    shuffle image array
    display images
    update displayed score
    if score > topScore
    ... then increase topScore by 1
    if user clicks the same image twice
    then....
    set score to 0

  */

  shuffleArray = () => {
      let lastIndex = characterArray.length - 1;
      for (; lastIndex > 0; lastIndex--) {
        const randomIndex = Math.floor(Math.random() * (lastIndex + 1));
        const temp = characterArray[lastIndex];
        characterArray[lastIndex] = characterArray[randomIndex];
        characterArray[randomIndex] = temp;
      }
      this.setState({ characterArray })
    }

  render() {
    return (
      <Wrapper>
        <Title>The Simpsons Characters
        <p>score 0 Top score 0</p>
          </Title> 
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
