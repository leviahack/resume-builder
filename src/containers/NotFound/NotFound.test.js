// Third-party dependencies
import React from 'react';
import { Provider } from 'react-redux';
import ReactTestRender from 'react-test-renderer';

// Own constants/actions/components
import configureStore from 'store/configure-store';
import NotFound from './NotFound';

describe('NotFound: ', () => {
  test('should render correctly', () => {
    const store = configureStore();
    const component = ReactTestRender.create(
      <Provider store={store}>
        <NotFound />
      </Provider>,
    );
    const render = component.toJSON();
    expect(render).toMatchSnapshot();
  });
});
