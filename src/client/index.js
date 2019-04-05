import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ParallaxProvider } from 'react-scroll-parallax';
import shims from './util/shims';
import App from './components/app';
import store from './store';

if (typeof window === undefined) {
	global.window = {};
	global.location = {};
	global.document = {};;
}

const Index = () => (
  <Provider store={store}>
    <BrowserRouter basename="/">
			<ParallaxProvider>
      	<App />
			</ParallaxProvider>
    </BrowserRouter>
  </Provider>
);

hydrate(<Index />, document.getElementById('app'));