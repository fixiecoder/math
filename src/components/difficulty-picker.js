import React from 'react';
import * as difficulties from '../constants/difficulty-types';

export default function DifficultyPicker(props) {

  const wrapper = {
    display: 'flex',
    width: '100%',
    justifyContent: 'center'
  }

  const inner = {
    margin: 20,
    display: 'flex',
    width: 300,
    justifyContent: 'center'
  }

  const selected = {
    flex: 1,
    border: '3px solid blue',
    margin: 10,
    padding: 5,
    borderRadius: 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
    height: 40
  };

  const unselected = Object.assign({}, selected, {
    border: '3px solid green'
  });

  return (
    <div style={wrapper}>
      <div style={inner}>
        <label style={props.difficulty === difficulties.EASY ? selected : unselected}>
          <span>EASY</span>
          <input
            hidden={true}
            type="radio"
            name="difficulty"
            onChange={() => props.setDifficulty(difficulties.EASY)}
            checked={props.difficulty === difficulties.EASY}
          />
        </label>
        <label style={props.difficulty === difficulties.MEDIUM ? selected : unselected}>
          <span>MEDIUM</span>
          <input
            hidden={true}
            type="radio"
            name="difficulty"
            onChange={() => props.setDifficulty(difficulties.MEDIUM)}
            checked={props.difficulty === difficulties.MEDIUM}
          />
        </label>
        <label style={props.difficulty === difficulties.HARD ? selected : unselected}>
          <span>HARD</span>
          <input
            hidden={true}
            type="radio"
            name="difficulty"
            onChange={() => props.setDifficulty(difficulties.HARD)}
            checked={props.difficulty === difficulties.HARD}
          />
        </label>
      </div>
    </div>
  );
}
