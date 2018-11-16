import * as React from 'react';
import * as ReactShallowRenderer from 'react-test-renderer/shallow';
import Home from '../Home';
import { shallow } from 'enzyme';
// const ReactShallowRenderer = require('react-test-renderer/shallow');
test('should render Home correctly', () => {
    const renderer = ReactShallowRenderer.createRenderer();
    renderer.render(React.createElement(Home));
    // console.log(renderer.getRenderOutput());
    
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('should have H1 tag', () => {
    const h1 = shallow(React.createElement(Home));
  
    expect(h1.find('h1').text()).toEqual('Home Component');
    
    expect(h1.find('div').containsMatchingElement(React.createElement('h1',{children:'Home Component'}))).toEqual(true);
  
    // Snapshot demo
    expect(Home).toMatchSnapshot();
  });