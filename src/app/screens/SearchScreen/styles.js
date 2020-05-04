import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.grayLight,
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20
  },
  books: {
    width: '100%'
  }
});

export default styles;
