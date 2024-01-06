import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

export interface AuthState {
  isAuth: boolean;
}
const initialState: AuthState = {
  isAuth: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: state => {
      state.isAuth = true;
    },
    logout: state => {
      state.isAuth = false;
    },
  },
});

export const {login, logout} = authSlice.actions;
export const selectAuth = (state: RootState) => state.auth.isAuth;
export default authSlice.reducer;
