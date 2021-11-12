// Third party dependencies
import React from 'react';
import { render } from 'react-dom';

// Own components/hooks/constants
import App from './App';
import 'utils/constants/i18n';
import * as serviceWorker from './serviceWorker';

render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
