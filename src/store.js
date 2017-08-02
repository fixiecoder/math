import Immutable from 'immutable';
import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers';
import thunk from 'redux-thunk';
import persistMiddleware from './middleware/persist';

const store = createStore(reducers, Immutable.Map(), applyMiddleware(thunk, persistMiddleware));

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