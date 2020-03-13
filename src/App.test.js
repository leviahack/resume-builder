// Third-party dependencies
import React from 'react';
import ReactTestRender from 'react-test-renderer';

// Own constants/actions/components
import App from './App';

describe('App: ', () => {
  test('should render correctly', () => {
    const component = ReactTestRender.create(<App />);
    const render = component.toJSON();
    expect(render).toMatchSnapshot();
  });
});
