import auth from './reducers/auth';
import questions from './reducers/questions';
import app from './reducers/app';
import { combineReducers } from "redux-immutable";


export default combineReducers({
  auth,
  questions,
  app
});