import React, {JSX} from 'react';
import {View, Text} from 'react-native';

import {useAppDispatch} from '../../redux/hooks.ts';
import {setForecastDays} from '../../redux/slices/forecastDaysSlice.ts';
import {CustomButton} from '../CustomButton';
import {styles} from './styles.ts';
import {useThemeContext} from '../../theme/themeContext.tsx';

export const ForecastButtons = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const {getColors} = useThemeContext();
  const colors = getColors();
  const onButtonPress = (number: number) => dispatch(setForecastDays(number));
  return (
    <View style={styles.container}>
      <Text style={[styles.label, {color: colors.accent}]}>Forecast for</Text>
      <View style={styles.buttonsContainer}>
        <CustomButton onPress={() => onButtonPress(3)} text={'3 days'} />
        <CustomButton onPress={() => onButtonPress(7)} text={'7 days'} />
        <CustomButton onPress={() => onButtonPress(14)} text={'14 days'} />
      </View>
    </View>
  );
};
