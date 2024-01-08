import React, {JSX} from 'react';
import {IForecastOutput} from '../../services/getForecastWeatherByCity.ts';

import {ForecastCard} from '../ForecastCard';
import {ScrollView, View} from 'react-native';
import {styles} from './styles.ts';
interface ForecastProps {
  forecastWeather: IForecastOutput[];
}
export const Forecast = ({forecastWeather}: ForecastProps): JSX.Element => {
  const renderedData = forecastWeather.map(dayInfo => {
    return <ForecastCard dayInfo={dayInfo} key={dayInfo.date} />;
  });
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>{renderedData}</View>
    </ScrollView>
  );
};
