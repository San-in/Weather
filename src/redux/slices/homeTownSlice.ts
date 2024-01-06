import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface HomeTownState {
  homeTown: null | string;
}
const initialState: HomeTownState = {
  homeTown: null,
};

export const homeTownSlice = createSlice({
  name: 'town',
  initialState,
  reducers: {
    setHomeTown: (state, action: PayloadAction<string>) => {
      state.homeTown = action.payload;
    },
  },
});

export const {setHomeTown} = homeTownSlice.actions;
export const selectHomeTown = (state: RootState) => state.town.homeTown;
export default homeTownSlice.reducer;
