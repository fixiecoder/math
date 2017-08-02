import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory, IndexRedirect } from 'react-router'
import Question from './containers/question';
import Menu from './containers/menu';
import store from './store';


ReactDOM.render((
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={App}>
        <IndexRedirect to="/menu" />
        <Route path="menu" component={Menu} />
        <Route path="practice" component={Question} />
      </Route>
    </Router>
    </Provider>
), document.getElementById('root'));

registerServiceWorker();
