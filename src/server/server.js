import express from 'express';
import http from 'http';
import fs from 'fs';
import path from 'path';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import helmet from 'helmet';
import React from 'react';
import { createStore } from 'redux';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import restAPI from './rest-api';
import App from '../client/components/app';
import reducers from '../client/reducers';
import {
  headersMiddleware,
  logMiddleware,
  requestIDMiddleware,
  metaDataMiddleware,
} from './middleware';

//--//--//--// INIT //--//--//--//
const app = new express();
const server = http.createServer(app);
const viewDir = process.env.NODE_ENV === 'production'
  ? 'dist/views'
  : 'src/server/views';

app.set('view engine', 'pug');
app.set('views', viewDir);

//--//--//--// RUN WEBPACK WHEN IN DEV MODE //--//--//--//
if (process.env.NODE_ENV === 'development') {
  const webpack = require('webpack');
  const wpConfig = require('../../webpack.dev.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(wpConfig);

  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: wpConfig.output.publicPath,
    stats: { colors: true }
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }));
}

//--//--//--// HELMET MIDDLEWARES//--//--//--//
if (process.env.HELMET_DISABLED !== 'true') {
   if (process.env.HELMET_HOSTS_DISABLED !== 'true') {
     app.use(helmet.hsts());
   }

   if (process.env.HELMET_NO_CACHE_ENABLED === 'true') {
     app.use(helmet.noCache());
   }

   if (process.env.HELMET_CROSS_DOMAIN_DISABLED !== 'true') {
     app.use(helmet.permittedCrossDomainPolicies());
   }

   if (process.env.HELMET_HIDE_POWERED_BY_DISABLED !== 'true') {
     app.use(helmet.hidePoweredBy());
   }
}

//--//--//--// MIDDLEWARES //--//--//--//
app.use(requestIDMiddleware);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(headersMiddleware);
app.use(logMiddleware());
app.use(metaDataMiddleware);

if (process.env.SERVER_STATIC === 'true') {
  app.use(express.static(path.join(__dirname, 'public/')));
}

//--//--//--// REST API //--//--//--//
app.use('/rest-api', restAPI);

//--//--//--// SERVER SIDE RENDERING //--//--//--//
app.get('*', (req, res) => {
  const store = createStore(reducers);
  const context = {};
  const criticalCSS = require('./views/critical.css');
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    </Provider>
  );

  if (context.url) {
    res.redirect(301, context.url);
    res.end();
  }

  const preloadedState = store.getState();

  res
    .set('Content-Type', 'text/html')
    .status(200)
    .render('index', {
      html,
      preloadedState,
      criticalCSS,
      metaData: req.metaData || {},
      assetPath: process.env.ASSET_PATH || '/'
    });
});

//--//--//--// START SERVER //--//--//--//
server.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
})
