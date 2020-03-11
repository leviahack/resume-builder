// Third-party dependencies
import React from 'react';
import ReactTestRender from 'react-test-renderer';

// Own constants/actions/components
import Home from './Home';

describe('Home: ', () => {
  test('should render correctly', () => {
    const component = ReactTestRender.create(<Home />);
    const render = component.toJSON();
    expect(render).toMatchSnapshot();
  });
});
