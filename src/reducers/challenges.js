import { Map, List } from 'immutable';
import * as actionTypes from '../actions/types/challenges';

const initialState = Map();

export default function challenges(state = initialState, action) {
  switch(action.type) {

    case actionTypes.SET_CHALLENGE:
      return action.practice;

    default:
      return state;
  }
}