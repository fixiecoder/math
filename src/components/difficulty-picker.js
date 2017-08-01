import React from 'react';
import * as difficulties from '../constants/difficulty-types';

export default function DifficultyPicker(props) {
  return (
    <div>
      <input
        type="radio"
        name="difficulty"
        onChange={() => props.setDifficulty(difficulties.EASY)}
      />
      <input
        type="radio"
        name="difficulty"
        onChange={() => props.setDifficulty(difficulties.MEDIUM)}
      />
      <input
        type="radio"
        name="difficulty"
        onChange={() => props.setDifficulty(difficulties.HARD)}
      />
    </div>
  );
}
