// Third party dependencies
import { createSlice } from '@reduxjs/toolkit';

// Own components/hooks/constants
import { LayoutState, ColumnFormat } from './layout.types';

export const initialState: LayoutState = {
  columnFormat: ColumnFormat.One,
  data: [],
};

const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {},
});

export default layoutSlice.reducer;
