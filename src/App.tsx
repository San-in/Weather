import React, {JSX} from 'react';
import {HomeScreen} from './screens/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './redux/store.ts';
import {ThemeProvider} from './theme/themeContext.tsx';

export const App = (): JSX.Element => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <HomeScreen />
      </ThemeProvider>
    </Provider>
  );
};
