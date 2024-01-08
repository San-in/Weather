import React from 'react';
import {View} from 'react-native';
import Svg, {Path} from 'react-native-svg';
import {styles} from './styles.ts';
import {COLORS} from '../../../shared/colors.ts';

interface SearchIconProps {
  color?: string;
}
export const SearchIcon = ({color = COLORS.darkBlue}: SearchIconProps) => {
  return (
    <View style={styles.iconContainer}>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <Path
          d="M15.5 14.9C16.77 13.62 17.5 11.88 17.5 10C17.5 6.41 14.09 3 10.5 3C6.91 3 3.5 6.41 3.5 10C3.5 13.59 6.91 17 10.5 17C11.88 17 13.18 16.37 14.15 15.35"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M21 21L15 15"
          stroke={color}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
};
