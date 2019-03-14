import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Triangle from './triangle';

const description = 'A right-angled triangle particle component';

//stories
storiesOf('Particle: Triangle', module)
  .add('default', () => (
    <Triangle />
  ), {
    info: { text: description }
  })
  .add('Orange medium', () => (
    <Triangle
      color="orange"
    />
  ))
  .add('Purple medium', () => (
    <Triangle
      color="purple"
    />
  ))
  .add('Aqua medium', () => (
    <Triangle
      color="aqua"
    />
  ))
  .add('Yellow medium', () => (
    <Triangle
      color="yellow"
    />
  ))
  .add('Orange small', () => (
    <Triangle
      color="orange"
      size="small"
    />
  ))
  .add('Orange with 0.25 opacity', () => (
    <Triangle
      color="orange"
      opacity={0.25}
    />
  ))
  .add('Giant!', () => (
    <Triangle
      size="giant"
    />
  ))
