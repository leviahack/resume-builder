// Third party dependencies
import { Provider } from 'react-redux';

// Own components/hooks/constants
import Router from 'router';
import { store } from 'store';
import GlobalStyles from './App.styles';

export const AppContent = () => <Router />;

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <AppContent />
  </Provider>
);

export default App;
