import { Map, fromJS } from 'immutable';
import { browserHistory } from 'react-router';
import * as actionTypes from './types/auth';
import { setLoading } from './app';
import API from './api';
import { getUserChallenges, storeUserChallenges } from './challenges';

export function setAuthTokens(authTokens) {
  return { type: actionTypes.SET_AUTH_TOKENS, authTokens };
}

export const attemptLogin = (credentials) => dispatch => {
  console.log('start')
  dispatch(setLoading(true));
  dispatch(API.post('/session', credentials))
    .then(result => {
      dispatch(setAuthTokens(Map({ tokenKey: result.tokenKey, tokenValue: result.tokenValue })));
      return dispatch(getUser(credentials.username));
    })
    .then(() => {
      return Promise.all([
        // dispatch(storeUserChallenges(credentials.username)),
        dispatch(getUserChallenges(credentials.username))
      ]);
    })
    .then(() => {
      dispatch(setLoading(false));
      browserHistory.replace('/app');
    })
};

export const logout = () => (dispatch, getState) => {
  const tokenKey = getState().getIn(['auth', 'tokenKey']);
  dispatch(API.del(`/session/${tokenKey}`));
  dispatch(setAuthTokens(Map({ tokenKey: null, tokenValue: null })));
  localStorage.clear();
  dispatch({ type: 'RESET_STATE' });
  // browserHistory.replace('/login');
};

export const getUser = (userId) => (dispatch, getState) =>
  dispatch(API.get(`/user/${userId}`))
    .then(user => {
      dispatch({ type: 'SET_USER', user: fromJS(user) });
    })
