// Third party dependencies
import { createSlice } from '@reduxjs/toolkit';

// Own components/hooks/constants
import { PersonalInfoState } from './personalInfo.types';

export const initialState: PersonalInfoState = {
  fullName: '',
  jobTitle: '',
  description: '',
  profilePicture: '',
};

const personalInfoSlice = createSlice({
  name: 'personalInfo',
  initialState,
  reducers: {},
});

export default personalInfoSlice.reducer;
