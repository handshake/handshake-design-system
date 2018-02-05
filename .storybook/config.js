import { configure } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';

import 'antd/dist/antd.css';
import 'semantic-ui-css/semantic.min.css';
import 'grommet/grommet.min.css';

// Customize options for our storybook UI
setOptions ({
    name: 'Handshake Design System',
    url: 'https://github.com/handshake/handshake-design-system/',
});

// dynamically load all stories from the source stories folder
const req = require.context('../src/stories', false, /\.js$/);
function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
