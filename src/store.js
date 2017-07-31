import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers';
import thunk from 'redux-thunk';
// import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, Immutable.Map(), applyMiddleware(thunk));

// const store = createStore(reducers,
//   applyMiddleware(thunk)
// );

window.DEBUG = {
  store
};

export default store;

// const store = createStore(reducers, Immutable.Map(), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__({
//   serialize: {
//     immutable: Immutable
//   },
// }));