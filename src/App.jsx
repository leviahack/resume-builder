// Third-party dependencies
import React from 'react';
import { Provider } from 'react-redux';
import { PropTypes } from 'prop-types';

// Material UI dependencies
import CssBaseline from '@material-ui/core/CssBaseline';

// Own constants/actions/components
import Router from 'router/Router';

const App = ({ store }) => (
  <Provider store={store}>
    <React.Fragment key="app">
      <CssBaseline />
      <Router />
    </React.Fragment>
  </Provider>
);

App.propTypes = {
  store: PropTypes.shape().isRequired,
};


export default App;
