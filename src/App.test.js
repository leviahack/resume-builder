// Third-party dependencies
import React from 'react';
import ReactTestRender from 'react-test-renderer';

// Own constants/actions/components
import configureStore from 'store/configure-store';
import App from './App';

describe('App: ', () => {
  test('should render correctly', () => {
    const store = configureStore();
    const component = ReactTestRender.create(<App store={store} />);
    const render = component.toJSON();
    expect(render).toMatchSnapshot();
  });
});
