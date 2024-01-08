import React, {JSX} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles.ts';
import {IForecastOutput} from '../../services/getForecastWeatherByCity.ts';
import {formatterDate} from '../../services/formatterDate.ts';
import {useThemeContext} from '../../theme/themeContext.tsx';

interface ForecastCardProps {
  dayInfo: IForecastOutput;
}
export const ForecastCard = ({dayInfo}: ForecastCardProps): JSX.Element => {
  const {date, maxTemp, minTemp} = dayInfo;
  const {getColors} = useThemeContext();
  const colors = getColors();
  return (
    <View
      style={[
        styles.container,
        {backgroundColor: colors.secondary, borderColor: colors.accent},
      ]}>
      {!!date && (
        <Text style={[styles.date, {color: colors.accent}]}>
          {formatterDate(date)}
        </Text>
      )}
      <Text style={[styles.text, {color: colors.accent}]}>
        max: <Text style={{color: colors.accent}}>{maxTemp}</Text>
      </Text>
      <Text style={[styles.text, {color: colors.accent}]}>
        min: <Text style={{color: colors.accent}}>{minTemp}</Text>
      </Text>
    </View>
  );
};
