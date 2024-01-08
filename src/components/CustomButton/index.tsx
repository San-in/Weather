import React, {JSX} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {styles} from './styles.ts';
import {useThemeContext} from '../../theme/themeContext.tsx';

interface CustomButtonProps {
  onPress: () => {};
  text: string;
}
export const CustomButton = ({
  onPress,
  text,
}: CustomButtonProps): JSX.Element => {
  const {getColors} = useThemeContext();
  const colors = getColors();
  return (
    <TouchableOpacity
      style={[styles.button, {backgroundColor: colors.accent}]}
      onPress={onPress}>
      <Text style={[styles.text, {color: colors.secondary}]}>{text}</Text>
    </TouchableOpacity>
  );
};
