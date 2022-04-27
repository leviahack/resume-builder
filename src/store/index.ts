// Third party dependencies
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// Own components/hooks/constants
import designReducer from 'store/design/design.slice';
import layoutReducer from 'store/layout/layout.slice';
import personalInfoReducer from 'store/personalInfo/personalInfo.slice';
import sectionsByIdReducer from 'store/sectionsById/sectionsById.slice';

export const store = configureStore({
  reducer: {
    design: designReducer,
    layout: layoutReducer,
    personalInfo: personalInfoReducer,
    sectionsById: sectionsByIdReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
