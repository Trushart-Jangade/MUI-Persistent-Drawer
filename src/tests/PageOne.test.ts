import * as React from 'react';
// import ReactShallowRenderer from 'react-test-renderer/shallow';
import PageOne from '../PageOne';
const ReactShallowRenderer = require('react-test-renderer/shallow');
test('should render PageOne correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(React.createElement(PageOne));    
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});
