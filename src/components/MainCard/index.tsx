import React, {JSX} from 'react';
import {View, Text, Image} from 'react-native';
import {styles} from './styles.ts';
import {COLORS} from '../../shared/colors.ts';
import {ICurrentWeatherOutput} from '../../services/getCurrentWeatherByCity.ts';
import {formatterDate} from '../../services/formatterDate.ts';
interface MainCardProps {
  currentWeather: ICurrentWeatherOutput;
}
export const MainCard = ({currentWeather}: MainCardProps): JSX.Element => {
  const {icon, date, isDay, place, country, temperature, description} =
    currentWeather;

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: !isDay ? COLORS.lightBlue : COLORS.darkBlue,
        },
      ]}>
      <View
        style={[
          styles.content,
          {
            backgroundColor: isDay ? COLORS.lightBlue : COLORS.darkBlue,
          },
        ]}>
        <Text
          style={[
            styles.location,
            {
              color: !isDay ? COLORS.lightBlue : COLORS.darkBlue,
            },
          ]}>
          {place} ({country})
        </Text>
        <Text
          style={[
            styles.date,
            {
              color: !isDay ? COLORS.lightBlue : COLORS.darkBlue,
            },
          ]}>
          {formatterDate(date)}
        </Text>
        <Text
          style={[
            styles.temperature,
            {
              color: !isDay ? COLORS.lightBlue : COLORS.darkBlue,
            },
          ]}>
          {temperature} °C
        </Text>
        <Image source={{uri: icon}} style={styles.icon} />
        <Text
          style={[
            styles.description,
            {
              color: !isDay ? COLORS.lightBlue : COLORS.darkBlue,
            },
          ]}>
          {description}
        </Text>
      </View>
    </View>
  );
};
