import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DotGrid from './dot-grid';
import sequences from '../../../../../test/mocks/dot-grid.json';

const actionMessage = 'Option clicked';
const description = 'yo yo yo';

//stories
storiesOf('Particle: DotGrid', module)
  .add('default', () => (
    <DotGrid
      sequence={sequences[0]}
      layout={[7, 3]}
      interval={500}
    />
  ), {
    info: { text: description }
  })
