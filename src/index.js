// Third party dependencies
import React from 'react';
import { render } from 'react-dom';

// Own constants/actions/components
import configureStore from 'store/configure-store';
import App from './App';
import * as serviceWorker from './serviceWorker';

// Styles
import 'styles/main.scss';

// Configure store
const store = configureStore();

render(<App store={store} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
