// Third party dependencies
import React from 'react';
import { Provider } from 'react-redux';

// Own components/hooks/constants
import Router from 'router';
import { store } from 'store';

export const AppContent: React.FC = () => <Router />;

const App = () => (
  <Provider store={store}>
    <AppContent />
  </Provider>
);

export default App;
