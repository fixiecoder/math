import { Map, List } from 'immutable';
import * as actionTypes from '../actions/types/challenges';

const initialState = Map();

export default function challenges(state = initialState, action) {
  switch(action.type) {

    case actionTypes.ADD_QUESTION_TO_CHALLENGE:
      return state.updateIn(['history'], history => history.push(action.question))

    case actionTypes.SET_CHALLENGE:
      return action.challenge;

    default:
      return state;
  }
}