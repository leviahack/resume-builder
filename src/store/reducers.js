// Third-party dependencies
import { combineReducers } from 'redux';

// Own actions/constants/components
import { reducer as language } from 'constants/strings.store';

const rootReducer = combineReducers({
  language,
});

export default rootReducer;
