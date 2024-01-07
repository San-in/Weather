import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    aspectRatio: 0.8,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  content: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
    gap: 10,
  },
  location: {fontWeight: 'bold', fontSize: 16},
  date: {fontWeight: 'bold', fontSize: 32},
  temperature: {fontWeight: 'bold', fontSize: 64, marginVertical: 20},
  description: {fontWeight: 'bold', fontSize: 24, fontStyle: 'italic'},
  icon: {width: 200, aspectRatio: 1.75},
});
