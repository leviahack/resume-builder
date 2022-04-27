// Third party dependencies
import { createSlice } from '@reduxjs/toolkit';

// Own components/hooks/constants
import { Alignment, DesignState, FontType, ProgressStyle, TitleStyle } from './design.types';

export const initialState: DesignState = {
  headerSettings: {
    alignment: Alignment.Left,
  },
  titleSettings: {
    alignment: Alignment.Left,
    style: TitleStyle.Simple,
  },
  typographySettings: {
    fontType: FontType.SanSerif,
    fontName: 'Roboto',
  },
  paletteSettings: {
    documentBackgroundColor: '#f5f5f4',
    documentTextColorPrimary: '#323232',
    documentTextColorSecondary: '#be979a',
    headerBackgroundColor: '#70708f',
    headerTextColorPrimary: '#ffffff',
    headerTextColorSecondary: '#ffffff',
  },
  progressSettings: {
    style: ProgressStyle.TextOnly,
  },
};

const designSlice = createSlice({
  name: 'design',
  initialState,
  reducers: {},
});

export default designSlice.reducer;
