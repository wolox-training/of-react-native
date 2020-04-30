import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    borderRadius: 20,
    alignItems: 'center',
    height: 40
  },
  input: {
    width: 270
  },
  searchIc: {
    width: 15,
    height: 15,
    margin: 10
  },
  closeIc: {
    width: 20,
    height: 20,
    margin: 10
  }
});

export default styles;
