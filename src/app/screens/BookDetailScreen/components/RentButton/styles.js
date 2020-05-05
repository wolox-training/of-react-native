import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  rentButton: {
    backgroundColor: COLORS.blue,
    borderRadius: 50,
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  rentButtonText: {
    color: COLORS.white,
    textAlign: 'center'
  },
  buttonCheck: {
    borderRadius: 50,
    height: 40,
    backgroundColor: COLORS.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.green,
    alignSelf: 'center',
    justifyContent: 'center'
  },
  check: {
    color: COLORS.green,
    textAlign: 'center'
  }
});

export default styles;
