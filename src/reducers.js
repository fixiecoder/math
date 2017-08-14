import auth from './reducers/auth';
import questions from './reducers/questions';
import challenges from './reducers/challenges';
import practice from './reducers/practice';
import app from './reducers/app';
import { combineReducers } from "redux-immutable";


export default combineReducers({
  auth,
  challenges,
  practice,
  questions,
  app
});