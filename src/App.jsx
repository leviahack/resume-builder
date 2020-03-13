// Third-party dependencies
import React from 'react';

// Material UI dependencies
import CssBaseline from '@material-ui/core/CssBaseline';

// Own constants/actions/components
import Router from 'router/Router';

function App() {
  return (
    <React.Fragment key="app">
      <CssBaseline />
      <Router />
    </React.Fragment>
  );
}

export default App;
