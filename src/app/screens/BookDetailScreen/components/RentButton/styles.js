import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  button: {
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 40
  },
  text: {
    textAlign: 'center'
  },
  gradient: {
    borderRadius: 50,
    alignSelf: 'center',
    justifyContent: 'center',
    height: 40,
    width: 280
  },
  rentButtonText: {
    color: COLORS.white
  },
  buttonCheck: {
    backgroundColor: COLORS.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.green
  },
  check: {
    color: COLORS.green
  }
});

export default styles;
