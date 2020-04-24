import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 0
  },
  imageBackground: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 0
  },
  logo: {
    marginBottom: 30
  },
  loginContainer: {
    flex: 1
  },
  input: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    marginBottom: 15,
    width: 200
  },
  loginButton: {
    backgroundColor: COLORS.blue,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.white,
    marginBottom: 10
  },
  buttonDisable: {
    borderColor: COLORS.gray
  },
  loginButtonText: {
    color: COLORS.white
  },
  textDisable: {
    color: COLORS.gray
  }
});

export default styles;
