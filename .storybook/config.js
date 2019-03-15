import { configure, addDecorator, addParameters } from '@storybook/react';
import { themes } from '@storybook/theming';
import shims from '../src/client/util/shims';
// import { withInfo } from '@storybook/addon-info';

const req = require.context("../src/client", true, /\.stories\.js$/);

addParameters({
  options: {
    isFullScreen: true,
    theme: themes.dark
  }
});

// addDecorator((story, context) => withInfo('Component information')(story)(context))

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
