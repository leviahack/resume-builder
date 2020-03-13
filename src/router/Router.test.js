// Third-party dependencies
import React from 'react';
import ReactTestRender from 'react-test-renderer';

// Own constants/actions/components
import Router from './Router';

describe('Router: ', () => {
  test('should render correctly', () => {
    const component = ReactTestRender.create(<Router />);
    const render = component.toJSON();
    expect(render).toMatchSnapshot();
  });
});
