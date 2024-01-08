import React, {useState} from 'react';
import {Modal, Pressable, Text, TextInput, View} from 'react-native';
import {setHomeTown} from '../../redux/slices/homeTownSlice.ts';
import {useAppDispatch} from '../../redux/hooks.ts';
import {styles} from './styles.ts';
import {useThemeContext} from '../../theme/themeContext.tsx';

interface ErrorMessageProps {
  text: string;
  setErrorModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
  errorModalVisible: boolean;
}
export const ErrorModal = ({
  text,
  errorModalVisible,
  setErrorModalVisible,
}: ErrorMessageProps) => {
  const dispatch = useAppDispatch();
  const [newLocation, setNewLocation] = useState('');
  const {getColors} = useThemeContext();
  const colors = getColors();

  return (
    <View style={[styles.page, {backgroundColor: colors.secondary}]}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={errorModalVisible}
        onRequestClose={() => {
          setErrorModalVisible(!errorModalVisible);
        }}>
        <View style={styles.container}>
          <View
            style={[
              styles.content,
              {backgroundColor: colors.accent, borderColor: colors.secondary},
            ]}>
            <Text style={[styles.warning, {color: colors.secondary}]}>
              {text}
            </Text>
            <Text style={[styles.inputLabel, {color: colors.secondary}]}>
              Choose another location:
            </Text>
            <TextInput
              onChangeText={setNewLocation}
              value={newLocation}
              style={[
                styles.input,
                {borderColor: colors.secondary, color: colors.secondary},
              ]}
            />
            <Pressable
              disabled={!newLocation}
              style={[
                styles.button,
                {backgroundColor: colors.secondary, borderColor: colors.accent},
              ]}
              onPress={() => {
                dispatch(setHomeTown(newLocation));
                setErrorModalVisible(!errorModalVisible);
              }}>
              <Text style={[styles.buttonText, {color: colors.accent}]}>
                Search
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};
