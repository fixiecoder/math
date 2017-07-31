import test from './reducers/test';
import questions from './reducers/questions';
import { combineReducers } from "redux-immutable";


export default combineReducers({
  test,
  questions,
});