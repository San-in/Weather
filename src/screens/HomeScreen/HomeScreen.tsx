import React, {JSX, useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, SafeAreaView} from 'react-native';
import {selectHomeTown, setHomeTown} from '../../redux/slices/homeTownSlice.ts';
import {useAppDispatch, useAppSelector} from '../../redux/hooks.ts';
import {
  getCurrentWeatherByCity,
  IOutput,
} from '../../services/getCurrentWeatherByCity.ts';
import {MainCard} from '../../components/MainCard/MainCard.tsx';
import {styles} from './styles.ts';

export const HomeScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const homeTown = useAppSelector(selectHomeTown);
  const [currentWeather, setCurrentWeather] = useState<IOutput | null>(null);

  useEffect(() => {
    dispatch(setHomeTown('Kyiv'));
    getCurrentWeatherByCity('Kyiv').then(res => {
      res && setCurrentWeather(res);
    });
  }, [dispatch]);

  if (!homeTown) {
    return <ActivityIndicator size={'large'} />;
  }
  return (
    <SafeAreaView style={styles.page}>
      <ScrollView style={styles.container}>
        {currentWeather && <MainCard currentWeather={currentWeather} />}
      </ScrollView>
    </SafeAreaView>
  );
};
