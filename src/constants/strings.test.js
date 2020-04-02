// Own actions/constants/components
import { actions, reducer } from './strings.store';
import { LOCALE_ES, LOCALE_EN } from './strings';

// Constants
const actionType = 'CHANGE_LANGUAGE';

describe('Strings Store:', () => {
  describe('Actions:', () => {
    it('should create an action to set the language', () => {
      const expectedAction = {
        type: actionType,
        selectedLanguage: 'EN',
        constants: LOCALE_EN,
      };

      expect(actions.setLanguage('EN')).toEqual(expectedAction);
    });

    it('should set spanish constants when executing setLanguage with ES', () => {
      const expectedAction = {
        type: actionType,
        selectedLanguage: 'ES',
        constants: LOCALE_ES,
      };

      expect(actions.setLanguage('ES')).toEqual(expectedAction);
    });
  });

  describe('Reducers:', () => {
    it('should return the initial state', () => {
      expect(reducer(undefined, {})).toEqual({
        selected: 'ES',
        constants: LOCALE_ES,
      });
    });

    it('should handle CHANGE_LANGUAGE action', () => {
      const action = {
        type: actionType,
        selectedLanguage: 'EN',
        constants: LOCALE_EN,
      };

      expect(reducer(undefined, action)).toEqual({
        selected: 'EN',
        constants: LOCALE_EN,
      });
    });
  });
});
