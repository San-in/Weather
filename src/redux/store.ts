import {configureStore} from '@reduxjs/toolkit';
import townReducer from './slices/homeTownSlice';
import daysReducer from './slices/forecastDaysSlice.ts';

export const store = configureStore({
  reducer: {
    town: townReducer,
    days: daysReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
