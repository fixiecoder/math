import auth from './reducers/auth';
import questions from './reducers/questions';
import { combineReducers } from "redux-immutable";


export default combineReducers({
  auth,
  questions,
});