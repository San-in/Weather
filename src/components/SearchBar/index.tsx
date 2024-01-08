import {Text, TextInput, TouchableOpacity, View} from 'react-native';

import {setHomeTown} from '../../redux/slices/homeTownSlice.ts';
import {SearchIcon} from '../icons/SearchIcon';
import React, {useState} from 'react';
import {useAppDispatch} from '../../redux/hooks.ts';
import {styles} from './styles.ts';
import {useThemeContext} from '../../theme/themeContext.tsx';

export const SearchBar = () => {
  const dispatch = useAppDispatch();
  const [searchedValue, setSearchedValue] = useState<string>('');
  const {getColors} = useThemeContext();
  const colors = getColors();
  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          {
            borderColor: colors.accent,
            color: colors.accent,
          },
        ]}
        onChangeText={setSearchedValue}
        value={searchedValue}
      />
      <TouchableOpacity
        onPress={() => {
          setSearchedValue('');
          dispatch(setHomeTown(searchedValue));
        }}
        style={[
          styles.button,
          {borderColor: colors.secondary, backgroundColor: colors.accent},
        ]}>
        <Text style={[styles.buttonText, {color: colors.secondary}]}>
          Search
        </Text>
        <SearchIcon color={colors.secondary} />
      </TouchableOpacity>
    </View>
  );
};
