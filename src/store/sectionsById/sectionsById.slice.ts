// Third party dependencies
import { createSlice } from '@reduxjs/toolkit';

// Own components/hooks/constants
import { SectionsByIdState } from './sectionsById.types';

export const initialState: SectionsByIdState = {};

const sectionsByIdSlice = createSlice({
  name: 'sectionsById',
  initialState,
  reducers: {},
});

export default sectionsByIdSlice.reducer;
