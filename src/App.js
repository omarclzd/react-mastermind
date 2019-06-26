import React, { Component } from 'react';
import './App.css';
import GameBoard from './components/GameBoard/GameBoard'
import ColorPicker from './components/ColorPicker/ColorPicker';
import GameTimer from './components/GameTimer/GameTimer';
import NewGameButton from './components/NewGameButton/NewGameButton';

const colors = ['#7CCCE5', '#FDE47F', '#E04644', '#B576AD'];

class App extends Component {

  constructor() {
    super();
    this.state = {
      setColorIdx: 0,
      guesses: [],
      code: this.genCode()

    }
  }

  genCode() {
    return new Array(4).fill().map(() => Math.floor(Math.random() * colors.length)); 
  }

  render() {
    return (
      <div className="App">
        <button onClick={() => this.setState((state) => {
          return {

            setColorIdx: ++state.setColorIdx % 4
          }
        })}>
          Next Color
        </button>
        Selected color: {colors[this.state.setColorIdx]}
        <header className="App-header">React Mastermind</header>
        <div className="flex-h">
          <GameBoard />
          <div>
            <ColorPicker colors={colors} />
            <GameTimer />
            <NewGameButton />
          </div>
        </div>
        <footer>footer</footer>

      </div>
    );
  }





}

export default App;
