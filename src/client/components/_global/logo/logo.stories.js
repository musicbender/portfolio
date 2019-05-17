import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Logo from './logo';

const description = 'Logo component';

//stories
storiesOf('Logo', module)
  .add('default', () => (
    <Logo />
  ), {
    info: { text: description }
  })
  .add('orange', () => (
    <Logo color='orange' />
  ))
  .add('aqua', () => (
    <Logo color='aqua' />
  ))
