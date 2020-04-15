import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    elevation: 1,
    flex: 0,
    margin: 20,
    padding: 20,
    shadowColor: COLORS.black,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9,
    width: 350
  }
});

export default styles;
