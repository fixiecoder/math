import { Map, List } from 'immutable';
import * as actionTypes from '../actions/types/practice';

const initialState = Map();

export default function challenges(state = initialState, action) {
  switch(action.type) {

    case actionTypes.SET_PRACTICE:
      return action.practice;

    default:
      return state;
  }
}