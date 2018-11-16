import * as React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import Login from '../Login';
const ReactShallowRenderer = require('react-test-renderer/shallow');
test('should render Login correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(React.createElement(Login));    
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
