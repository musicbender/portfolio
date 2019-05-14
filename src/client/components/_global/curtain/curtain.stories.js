import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Curtain from './curtain';

const description = 'A curtain transition effect component';

//stories
storiesOf('Curtain', module)
  .add('default', () => (
    <Curtain />
  ), {
    info: { text: description }
  })
  .add('reverse blocks enterence', () => (
    <Curtain entrance="reverse-blocks"/>
  ))
  .add('rows enterence', () => (
    <Curtain entrance="rows"/>
  ))
  .add('full enterence', () => (
    <Curtain entrance="full"/>
  ))
  .add('blocks exit', () => (
    <Curtain exit="blocks" />
  ))
  .add('reverse blocks exit', () => (
    <Curtain exit="reverse-blocks" />
  ))
  .add('rows exit', () => (
    <Curtain exit="rows" />
  ))
  .add('full exit', () => (
    <Curtain exit="full" />
  ))
  .add('longer duration', () => (
    <Curtain duration={5000} />
  ))
  .add('shorter duration', () => (
    <Curtain duration={1000} />
  ))
