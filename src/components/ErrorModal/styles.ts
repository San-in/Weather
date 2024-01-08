import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  page: {height: '100%'},
  container: {
    height: '100%',
    padding: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    borderWidth: 10,
    borderRadius: 30,
    padding: 20,
    alignItems: 'center',
  },
  warning: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 30,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    minWidth: 200,
    padding: 5,
    marginBottom: 40,
    fontWeight: 'bold',
  },
  inputLabel: {marginBottom: 10},
  button: {
    borderRadius: 10,
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 1,
    alignSelf: 'flex-end',
  },
  buttonText: {fontWeight: 'bold'},
});
