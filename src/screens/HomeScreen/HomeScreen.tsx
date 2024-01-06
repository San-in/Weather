import React, {JSX, useEffect} from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {selectHomeTown, setHomeTown} from '../../redux/slices/homeTownSlice.ts';
import {useAppDispatch, useAppSelector} from '../../redux/hooks.ts';

export const HomeScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const homeTown = useAppSelector(selectHomeTown);

  useEffect(() => {
    dispatch(setHomeTown('Kyiv'));
  }, []);

  if (!homeTown) {
    return <ActivityIndicator />;
  }
  return (
    <View>
      <Text>{homeTown}</Text>
    </View>
  );
};
