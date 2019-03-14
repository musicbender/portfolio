import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DotGrid from './dot-grid';

const actionMessage = 'Option clicked';
const description = 'yo yo yo';


//stories
storiesOf('DotGrid', module)
  .add('default', () => (
    <DotGrid
      sequence={[[]]}
      interval={500}
    />
  ), {
    info: { text: description }
  })
