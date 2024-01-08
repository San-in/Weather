import {StyleSheet} from 'react-native';
import {COLORS} from '../../shared/colors.ts';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 4,
    backgroundColor: COLORS.lightBlue,
  },
  date: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 10,
  },
  text: {fontWeight: 'bold'},
});
