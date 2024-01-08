import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface forecastDaysState {
  forecastDays: number;
}
const initialState: forecastDaysState = {
  forecastDays: 0,
};

export const forecastDaysSlice = createSlice({
  name: 'days',
  initialState,
  reducers: {
    setForecastDays: (state, action: PayloadAction<number>) => {
      state.forecastDays = action.payload;
    },
  },
});

export const {setForecastDays} = forecastDaysSlice.actions;
export const selectForecastDays = (state: RootState) => state.days.forecastDays;
export default forecastDaysSlice.reducer;
