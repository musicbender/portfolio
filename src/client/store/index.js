import { createStore, applyMiddleware, compose } from 'redux';
import promise from 'redux-promise';
import reducers from '../reducers';
import { globalMiddleware, homeMiddleware } from '../middleware';
import { hasWindow } from '../util/util';

const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;

let middleware = [
  globalMiddleware,
  homeMiddleware,
  promise
];

let store;

if (process.env.NODE_ENV !== "production" && hasWindow() && window.__REDUX_DEVTOOLS_EXTENSION__) {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancer = composeEnhancers(applyMiddleware(...middleware));
  store = createStore(reducers, preloadedState, enhancer);
} else {
	store = createStore(reducers, preloadedState, applyMiddleware(...middleware));
}

export default store;
