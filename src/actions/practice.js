import * as actionTypes from './types/practice';
import { browserHistory } from 'react-router';
import { Map, List } from 'immutable';
import { setCurrentChallenge, setGameType } from './questions';
import { PRACTICE } from '../constants/game-types';
import { TABLES } from '../constants/tables';

export const setPractice = (practice) => dispatch => {
  dispatch({ type: actionTypes.SET_PRACTICE, practice })
}

export const initPractice = (difficulty, methods, tables) => (dispatch, getState) => {
  tables = tables.filter(table => table.get('included'));
  const includedTables = tables.map(table => {
    console.log('=================')
    console.log(table.toJS())
    return TABLES.get(table.get('key'));
  });
  const includedMethods = methods.filter(method => method.get('included') === true);
  const practice = Map({
    questions: List(),
    includedTables,
    methods: includedMethods,
    difficulty 
  });

  dispatch(setPractice(practice));
  dispatch(setGameType(PRACTICE));
  browserHistory.push('/app/questions');
};
