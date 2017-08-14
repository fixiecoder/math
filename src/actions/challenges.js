import { browserHistory } from 'react-router';
import { Map, List } from 'immutable';
import { setCurrentChallenge, setGameType } from './questions';
import { CHALLENGE } from '../constants/game-types';

export const initChallenge = (challengeId) => (dispatch, getState) => {
  const tables = getState().getIn(['questions', 'timesTables'])
  const challenge = getState().getIn(['challenges', challengeId]);
  const includedTables = challenge.get('tables').map(table => tables.get(table));
  console.log(tables.toJS())
  console.log(challenge.toJS())
  console.log(includedTables.toJS())
  const currentChallenge = Map({
    id: challengeId,
    questionCount: challenge.get(),
    currentQuestion: challenge.get('questionCount'),
    questions: List(),
    includedTables
  });

  dispatch(setCurrentChallenge(currentChallenge));
  dispatch(setGameType(CHALLENGE));
  browserHistory.push('/app/questions');

};
