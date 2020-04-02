// Third-party dependencies
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import promise from 'redux-promise-middleware';

// Own actions/constants/components
import rootReducer from './reducers';

const configureStore = (preloadedState) => {
  const middleware = [promise, thunkMiddleware];

  return createStore(
    rootReducer,
    preloadedState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
};

export default configureStore;
