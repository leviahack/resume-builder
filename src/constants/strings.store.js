// Own actions/constants/components
import { LOCALE_ES, LOCALE_EN } from './strings';

//-----------------------------------------------------------
// Actions
//-----------------------------------------------------------

const setLanguage = (language) => ({
  type: 'CHANGE_LANGUAGE',
  selectedLanguage: language,
  constants: language === 'ES' ? LOCALE_ES : LOCALE_EN,
});

const actions = {
  setLanguage,
};

//-----------------------------------------------------------
// Reducers
//-----------------------------------------------------------
const initialState = {
  selected: 'ES',
  constants: LOCALE_ES,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        selected: action.selectedLanguage,
        constants: action.constants,
      };
    default:
      return state;
  }
};

//-----------------------------------------------------------
// Selectors
//-----------------------------------------------------------
const constants = (state) => state.language.constants;

const selectors = { constants };

export { actions, reducer, selectors };
