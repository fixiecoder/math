import { browserHistory } from 'react-router';
import { Map, List } from 'immutable';
import { setCurrentChallenge, setGameType } from './questions';
import { CHALLENGE } from '../constants/game-types';
import { TABLES } from '../constants/tables';
import * as actionTypes from './types/challenges';

export const setChallenge = challenge => dispatch => {
  dispatch({ type: actionTypes.SET_CHALLENGE, challenge })
};

export const initChallenge = (challenge) => (dispatch, getState) => {
  let tables = Map();
  challenge.get('includedTables').forEach(tableKey =>
    tables = tables.set(tableKey, TABLES.get(tableKey))
  );

  let methods = Map();
  challenge.get('methods').forEach(method => {
    methods = methods.set(method, Map({ method }))
  });

  const currentChallenge = Map({
    startTime: Date.now(),
    challengeId: challenge.get('challengeId'),
    questionCount: challenge.get('questionCount'),
    currentQuestion: 1,
    history: List(),
    includedTables: tables,
    methods
  });

  dispatch(setChallenge(currentChallenge));
  dispatch(setGameType(CHALLENGE));
  browserHistory.push('/app/questions');

};
