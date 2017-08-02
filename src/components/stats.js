import React from 'react';
import { CORRECT, INCORRECT } from '../constants/question-status';

const statsWrapperStyle = {

};

export default function Stats(props) {
  const totalQuestionCount = props.history.size;
  const correctQuestionCount = props.history.filter(question => question.get('status') === CORRECT).size;
  const incorrectQuestionCount = props.history.filter(question => question.get('status') === INCORRECT).size;

  return (
    <div style={statsWrapperStyle}>
      <div>Total: {totalQuestionCount}</div>
      <div>Correct: {correctQuestionCount}</div>
      <div>Incorrect: {incorrectQuestionCount}</div>
      <button onClick={() => props.resetQuestionHistoryByType(props.gameType)}>Reset</button>
    </div>
  );
}
