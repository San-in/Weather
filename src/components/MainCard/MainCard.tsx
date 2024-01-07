import React, {JSX} from 'react';
import {View, Text, Image} from 'react-native';
import {IOutput} from '../../services/getCurrentWeatherByCity.ts';
import {styles} from './styles.ts';
interface MainCardProps {
  currentWeather: IOutput;
}
export const MainCard = ({currentWeather}: MainCardProps): JSX.Element => {
  const {icon, date, isDay, place, country, temperature, description} =
    currentWeather;
  const dateObject = new Date(date);
  const formattedDate = dateObject.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
  });

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: !isDay ? '#EEF5FF' : '#596FB7',
        },
      ]}>
      <View
        style={[
          styles.content,
          {
            backgroundColor: isDay ? '#EEF5FF' : '#596FB7',
          },
        ]}>
        <Text
          style={[
            styles.location,
            {
              color: !isDay ? '#EEF5FF' : '#596FB7',
            },
          ]}>
          {place} ({country})
        </Text>
        <Text
          style={[
            styles.date,
            {
              color: !isDay ? '#EEF5FF' : '#596FB7',
            },
          ]}>
          {formattedDate}
        </Text>
        <Text
          style={[
            styles.temperature,
            {
              color: !isDay ? '#EEF5FF' : '#596FB7',
            },
          ]}>
          {temperature} °C
        </Text>
        <Image source={{uri: icon}} style={styles.icon} />
        <Text
          style={[
            styles.description,
            {
              color: !isDay ? '#EEF5FF' : '#596FB7',
            },
          ]}>
          {description}
        </Text>
      </View>
    </View>
  );
};
