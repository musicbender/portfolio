import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import shims from './util/shims';
import App from './components/app';
import store from './store';

const Index = () => (
  <Provider store={store}>
    <BrowserRouter basename="/">
      <App />
    </BrowserRouter>
  </Provider>
);

hydrate(<Index />, document.getElementById('app'));
