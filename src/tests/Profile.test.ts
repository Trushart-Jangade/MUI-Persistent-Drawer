import * as React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Profile from '../Profile';
const ReactShallowRenderer = require('react-test-renderer/shallow');
test('should render Profile correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(React.createElement(Profile));    
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
