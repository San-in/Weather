import {configureStore} from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import townReducer from './slices/homeTownSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    town: townReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
