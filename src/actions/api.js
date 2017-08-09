// const baseUrl = 'https://zq5rtfw2o0.execute-api.eu-west-1.amazonaws.com/prod';
const baseUrl = 'https://1regoss6g3.execute-api.eu-west-1.amazonaws.com/prod';

const makeRequest = (uri, method, body) => (dispatch, getState) => new Promise((resolve, reject) => {
  const authTokens = getState().get('auth');
  const headers = new Headers({
    'x-auth-token-key': authTokens.get('tokenKey'),
    'x-auth-token-value': authTokens.get('tokenValue'),
  });
  const request = {
    method,
    headers
  };

  // if(method === 'GET') {
  //   request.mode = 'no-cors';
  // }

  if(body) {
    request.body = JSON.stringify(body);
  }

  fetch(`${baseUrl}${uri}`, request)
    .then(response => {
      if(response.ok) {
        const contentType = response.headers.get('content-type');
        if(contentType === 'application/json') {
          return response.json();
        } else {
          return response.text();
        }
      }
    })
    .then(responseData => {
      resolve(responseData);
    })
    .catch(e => reject(e));
});

export default {
  get: uri => dispatch => {
    return dispatch(makeRequest(uri, 'GET'));
  },

  post: (uri, body) => dispatch => {
    return dispatch(makeRequest(uri, 'POST', body));
  },

  put: (uri, body) => dispatch => {
    return dispatch(makeRequest(uri, 'PUT', body));
  },

  del: (uri, body) => dispatch => {
    return dispatch(makeRequest(uri, 'DELETE'));
  }
}


// {
//     "username": "amy",
//     "password": "password2"
// }