import * as React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import PageSecond from '../PageSecond';
const ReactShallowRenderer = require('react-test-renderer/shallow');
test('should render PageSecond correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(React.createElement(PageSecond));    
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
