import { Map } from 'immutable';
import { browserHistory } from 'react-router';
import * as actionTypes from './types/auth';
import API from './api';

export function setAuthTokens(authTokens) {
  return { type: actionTypes.SET_AUTH_TOKENS, authTokens };
}

export const attemptLogin = (credentials) => dispatch => {
  console.log('start')
  dispatch(API.post('/session', credentials))
    .then(result => {
      dispatch(setAuthTokens(Map({ tokenKey: result.tokenKey, tokenValue: result.tokenValue })));
      dispatch({ type: actionTypes.SET_USER, result });
      dispatch(getUser(credentials.username));
      browserHistory.replace('/app');
    });
};

export const logout = () => (dispatch, getState) => {
  const tokenKey = getState().getIn(['auth', 'tokenKey']);
  dispatch(API.del(`/session/${tokenKey}`));
  dispatch(setAuthTokens(Map({ tokenKey: null, tokenValue: null })));
  localStorage.clear();
  browserHistory.replace('/login');
};

export const getUser = (userId) => (dispatch, getState) => {
  dispatch(API.get(`/user/${userId}`))
    .then(user => {
      console.log("WHAT", user);
    })
};
