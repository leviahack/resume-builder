// Third-party dependencies
import React from 'react';
import ReactTestRender from 'react-test-renderer';

// Own constants/actions/components
import NotFound from './NotFound';

describe('NotFound: ', () => {
  test('should render correctly', () => {
    const component = ReactTestRender.create(<NotFound />);
    const render = component.toJSON();
    expect(render).toMatchSnapshot();
  });
});
