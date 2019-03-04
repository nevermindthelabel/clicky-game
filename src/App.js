import React, { Component } from "react";
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import "./App.css";
import characterArray from "./characterArray";

export default class App extends Component {

  constructor() {
      super();
      this.state = {
      characterArray,
      score: 0,
      maxScore: 0,
      clickedArray: [],
    };
  }


  handleIncrement = () => {
    this.setState({ score: this.state.score + 1 })
      if (this.state.score >= this.state.maxScore) {
        this.setState({ maxScore: this.state.maxScore + 1 })
      } 
  } 

  startGame = () => {
    this.setState({
      score: 0,
      maxScore: this.state.maxScore,
      clickedArray: []
     })
  }
  
  shuffleArray = (id) => {
    this.setState({ 
      clickedArray: [...this.state.clickedArray, id]
     })
     if (this.state.clickedArray.indexOf(id) !== -1){
       this.startGame()
     } else {
      this.handleIncrement();
      let lastIndex = characterArray.length - 1;
      for (; lastIndex > 0; lastIndex--) {
      const randomIndex = Math.floor(Math.random() * (lastIndex + 1));
      const temp = characterArray[lastIndex];
      characterArray[lastIndex] = characterArray[randomIndex];
      characterArray[randomIndex] = temp;
    }
    this.setState({ characterArray })
  }
  }

  render() {
    return (
      <Wrapper>
        <Title>The Simpsons Characters
        <p>score: {this.state.score} Top score: {this.state.maxScore} </p>
          </Title> 
        {this.state.characterArray.map(character => (
          <CharacterCard
          shuffleArray={this.shuffleArray}
          id={character.id}
          key={character.id}
          image={character.image}
          name={character.name}
          />
        ))}
      </Wrapper>
    );
  }
}
