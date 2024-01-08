import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Svg, {G, Rect, Circle} from 'react-native-svg';
import {styles} from './styles.ts';
import {COLORS} from '../../../shared/colors.ts';
import {useThemeContext} from '../../../theme/themeContext.tsx';

export const SwitchIcon = () => {
  const {darkMode, toggleTheme} = useThemeContext();
  return (
    <TouchableOpacity onPress={toggleTheme}>
      <View style={styles.iconContainer}>
        <Svg width="48" height="30" viewBox="0 0 48 30" fill="none">
          <G opacity={darkMode ? 1 : 0}>
            <Rect
              x="2"
              y="5"
              width="44"
              height="24"
              rx="12"
              fill={COLORS.darkBlue}
            />
            <Circle cx="34" cy="17" r="10" fill={COLORS.lightBlue} />
          </G>
          <G opacity={darkMode ? 0 : 1}>
            <Rect
              x="2"
              y="5"
              width="44"
              height="24"
              rx="12"
              fill={COLORS.lightBlue}
            />
            <Circle cx="16" cy="18" r="10" fill={COLORS.darkBlue} />
          </G>
        </Svg>
      </View>
    </TouchableOpacity>
  );
};
