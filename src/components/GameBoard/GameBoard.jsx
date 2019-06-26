import React from 'react'
import GuessRow from '../GuessRow/GuessRow';

const GameBoard = props => (
  <div className='component'>
    <section>
    <p>GameBoard</p>
    <p>
      <GuessRow guessNum="#"/>
    </p>
    <p>
      <GuessRow guessNum="#"/>
    </p>

    </section>
  </div>
)

export default GameBoard