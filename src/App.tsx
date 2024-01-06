import React, {JSX} from 'react';
import {HomeScreen} from './screens/HomeScreen/HomeScreen.tsx';
import {Provider} from 'react-redux';
import {store} from './redux/store.ts';

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <HomeScreen />
    </Provider>
  );
};
