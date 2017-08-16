import { Map, List } from 'immutable';
import * as actionTypes from '../actions/types/challenges';

const initialState = Map();

export default function challenges(state = initialState, action) {
  switch(action.type) {

    case actionTypes.RESET_CHALLENGE_FACTOR:
      return state.setIn(['includedTables', action.table, 'factors', action.factorType], Range(1, 11).toList());

    case actionTypes.ADD_QUESTION_TO_CHALLENGE:
      return state.updateIn(['history'], history => history.push(action.question))
        .set('currentQuestion', state.get('currentQuestion') + 1);

    case actionTypes.SET_CHALLENGE:
      return action.challenge;

    default:
      return state;
  }
}