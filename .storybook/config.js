import { configure } from '@storybook/react';

import 'antd/dist/antd.css';

// dynamically load all stories from the source stories folder
const req = require.context('../src/stories', false, /\.js$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
