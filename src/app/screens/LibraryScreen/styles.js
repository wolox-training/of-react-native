import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.grayLight,
    flex: 1,
    justifyContent: 'center'
  },
  library: {
    marginVertical: 20
  }
});

export default styles;
