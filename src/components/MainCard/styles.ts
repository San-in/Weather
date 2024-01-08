import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  content: {
    width: '100%',
    borderRadius: 50,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 30,
    gap: 5,
  },
  location: {fontWeight: 'bold', fontSize: 16, textAlign: 'center'},
  date: {fontWeight: 'bold', fontSize: 26},
  temperature: {fontWeight: 'bold', fontSize: 52, marginTop: 10},
  description: {fontWeight: 'bold', fontSize: 24, fontStyle: 'italic'},
  icon: {width: 120, height: 120},
});
