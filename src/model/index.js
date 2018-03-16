import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import React from 'react';
import reducers from './reducers';

let enhancer = applyMiddleware(thunk);
if (process.env.NODE_ENV === 'development') {
  enhancer = compose(
    applyMiddleware(thunk),
  )
}

let store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  enhancer
);

if (process.env.NODE_ENV === 'development') {
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer)
    })
  }
}

export default store;
