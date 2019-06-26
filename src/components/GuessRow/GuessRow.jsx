import React from 'react'
import GuessPegs from '../GuessPegs/GuessPegs';
import GuessScore from '../GuessScore/GuessScore';

const GuessRow = props => (
  <div className='component'>
    <p>GuessRow {props.guessNum}</p>
    <p>
      <GuessPegs />
    </p>
    <p>
      <GuessScore />
    </p>
  </div>
)

export default GuessRow