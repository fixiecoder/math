import uuid from 'uuid';
import { Map } from 'immutable';
import { getRandomNumberBetween, getRandomType } from '../libs/helpers';
import * as actionTypes from './types/questions';
import {
  MULTIPLY,
  PLUS,
  MINUS,
  DIVIDE
} from '../constants/methods';
import { tableMap } from '../constants/tables';
import * as statusTypes from '../constants/question-status';
import {
  TYPE1,
  TYPE2,
  TYPE3
} from '../constants/question-types';
import * as difficulties from '../constants/difficulty-types';

export const generateQuestion = (method) => (dispatch, getState) => {
  const methods = getState().getIn(['questions', 'methods']);
  let method = methods.get(getRandomNumberBetween(0, methods.size - 1));
  const difficulty = getState().getIn(['questions', 'difficulty']);

  const allTables = getState().getIn(['questions', 'timesTables']);
  const includedTablesList = allTables.filter(table => table.get('included') === true).toList();
  const table = includedTablesList.get(getRandomNumberBetween(0, includedTablesList.size - 1))

  let qValue1;
  let qValue2;

  let addSubractRangeLimit = 20;
  if(difficulty === difficulties.MEDIUM) {
    addSubractRangeLimit = 100;
  } else if(difficulty === difficulties.HARD) {
    addSubractRangeLimit = 999;
  }


  if(Math.random() > 0.5) {
    const val2Index = getRandomNumberBetween(0, table.getIn(['factors', 'qV2']).size - 1);
    qValue1 = method === MULTIPLY ? table.get('value') : getRandomNumberBetween(0, addSubractRangeLimit);
    qValue2 = method === MULTIPLY ? table.getIn(['factors', 'qV2', val2Index]) : getRandomNumberBetween(0, addSubractRangeLimit);
  } else {
    const val1Index = getRandomNumberBetween(0, table.getIn(['factors', 'qV1']).size - 1);
    qValue1 = method === MULTIPLY ? table.getIn(['factors', 'qV1', val1Index]) : getRandomNumberBetween(0, addSubractRangeLimit);
    qValue2 = method === MULTIPLY ? table.get('value') : getRandomNumberBetween(0, addSubractRangeLimit);
  }

  dispatch({ type: actionTypes.REMOVE_FACTOR, table: tableMap[qValue1], factor: qValue2, factorType: 'qV2' });
  dispatch({ type: actionTypes.REMOVE_FACTOR, table: tableMap[qValue2], factor: qValue1, factorType: 'qV1'  });



  let answer;
  switch(method) {
    case MULTIPLY:
      answer = qValue1 * qValue2;
      break;

    case PLUS:
      answer = qValue1 + qValue2;
      break;

    case MINUS:
      answer = qValue1 - qValue2;
      break;

    case DIVIDE:
      answer = qValue1 / qValue2;
      break;

    default:
      answer = qValue1 + qValue2;
      method = PLUS;
      break;
  }

  let question = Map({
    questionRef: uuid.v4(),
    qValue1,
    qValue2,
    method,
    answer,
    questionType: difficulty === difficulties.EASY ? TYPE1 : getRandomType(),
    status: statusTypes.UNANSWERED
  });

  dispatch({ type: actionTypes.SET_CURRENT_QUESTION, question });
}

export const checkQuestionIsUnique = quesion => (dispatch, getState) => {

};

export const checkAnswer = (question, answer) => dispatch => {

};

export const answerQuestion = (question, answer) => (dispatch, getState) => {
  let status;
  answer = Number(answer);

  switch(question.get('questionType')) {
    case TYPE1:
      status = question.get('answer') === answer ? statusTypes.CORRECT : statusTypes.INCORRECT;
      break;

    case TYPE2:
      status = question.get('qValue1') === answer ? statusTypes.CORRECT : statusTypes.INCORRECT;
      break;

    case TYPE3:
      status = question.get('qValue2') === answer ? statusTypes.CORRECT : statusTypes.INCORRECT;
      break;

    default:
      status = statusTypes.UNANSWERED;
      break;

  }

  question = question.set('status', status);

  dispatch({ type: actionTypes.SET_CURRENT_QUESTION, question });
};

export function setTableIncluded(table, included) {
  return { type: actionTypes.SET_INCLUDED_TABLE, table, included };
}

export function setDifficulty(difficulty) {
  console.log(difficulty)
  return { type: actionTypes.SET_DIFFICULTY, difficulty };
}
