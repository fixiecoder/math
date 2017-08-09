import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import Question from './containers/question';
import Login from './containers/login';
import Menu from './containers/menu';
import store from './store';

function requireNoAuth(mextState, replace, callback) {
  const loggedIn = store.getState().getIn(['auth', 'tokenValue']);
  if(loggedIn) {
    replace('/app');
  }
  callback();
}

function requireAuth(mextState, replace, callback) {
  const loggedIn = store.getState().getIn(['auth', 'tokenValue']);
  if(!loggedIn) {
    replace('/login');
  }
  callback();
}

ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/">
        <IndexRedirect to="login" />
        <Route path="login" component={Login} onEnter={requireNoAuth} />
        <Route path="app" component={App} onEnter={requireAuth}>
          <IndexRedirect to="Menu" />
          <Route path="menu" component={Menu} />
          <Route path="practice" component={Question} />
          <Route path="challenage" component={Question} />
        </Route>
      </Route>
    </Router>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
