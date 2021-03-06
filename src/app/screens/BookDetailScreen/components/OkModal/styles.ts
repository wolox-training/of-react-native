import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 30
  },
  gif: {
    width: 150,
    height: 150,
    marginBottom: 15
  },
  button: {
    justifyContent: 'flex-end',
    backgroundColor: COLORS.blue,
    borderRadius: 0
  },
  buttonText: {
    color: COLORS.white
  }
});

export default styles;
