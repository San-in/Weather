import React, {JSX, useEffect, useState} from 'react';
import {ActivityIndicator, ScrollView, SafeAreaView, View} from 'react-native';
import Geolocation from '@react-native-community/geolocation';

import {selectHomeTown, setHomeTown} from '../../redux/slices/homeTownSlice.ts';
import {useAppDispatch, useAppSelector} from '../../redux/hooks.ts';
import {selectForecastDays} from '../../redux/slices/forecastDaysSlice.ts';

import {MainCard} from '../../components/MainCard';
import {ForecastButtons} from '../../components/ForecastButtons';
import {Forecast} from '../../components/Forecast';
import {ErrorModal} from '../../components/ErrorModal';
import {SwitchIcon} from '../../components/icons/SwithcIcon';
import {SearchBar} from '../../components/SearchBar';

import {
  getCurrentWeatherByCity,
  ICurrentWeatherOutput,
} from '../../services/getCurrentWeatherByCity.ts';
import {
  getForecastWeatherByCity,
  IForecastOutput,
} from '../../services/getForecastWeatherByCity.ts';
import {styles} from './styles.ts';
import {useThemeContext} from '../../theme/themeContext.tsx';

export const HomeScreen = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const homeTown = useAppSelector(selectHomeTown);
  const forecastDays = useAppSelector(selectForecastDays);

  const [currentWeather, setCurrentWeather] =
    useState<ICurrentWeatherOutput | null>(null);
  const [forecastWeather, setForecastWeather] = useState<IForecastOutput[]>([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [errorModalVisible, setErrorModalVisible] = useState(true);
  const {getColors} = useThemeContext();
  const colors = getColors();

  useEffect(() => {
    Geolocation.getCurrentPosition(
      position => {
        const latitude = String(position.coords.latitude);
        const longitude = String(position.coords.longitude);
        dispatch(setHomeTown(`${latitude},${longitude}`));
      },
      error => {
        console.log('Error getting location:', error);
        dispatch(setHomeTown('Kyiv'));
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  }, [dispatch]);

  useEffect(() => {
    if (homeTown) {
      getCurrentWeatherByCity(homeTown).then(res => {
        if (res?.message) {
          setErrorMessage(res?.message);
          setErrorModalVisible(true);
          return;
        } else {
          setCurrentWeather(res);
          setErrorMessage('');
        }
      });
    }
    if (homeTown && forecastDays && !errorMessage) {
      getForecastWeatherByCity(homeTown, forecastDays).then(res => {
        res && setForecastWeather(res);
      });
    }
  }, [errorMessage, homeTown, forecastDays]);

  if (!homeTown) {
    return <ActivityIndicator size={'large'} />;
  }
  if (errorModalVisible && errorMessage) {
    return (
      <ErrorModal
        text={errorMessage}
        setErrorModalVisible={setErrorModalVisible}
        errorModalVisible={errorModalVisible}
      />
    );
  }
  return (
    <SafeAreaView style={[styles.page, {backgroundColor: colors.main}]}>
      <View style={styles.switcher}>
        <SwitchIcon />
      </View>
      <ScrollView style={styles.container}>
        {currentWeather && (
          <>
            <SearchBar />

            <MainCard currentWeather={currentWeather} />
            <ForecastButtons />
          </>
        )}
        <View style={styles.forecast}>
          {!!forecastDays && <Forecast forecastWeather={forecastWeather} />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
