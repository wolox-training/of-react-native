import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  book: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    elevation: 1,
    margin: 20,
    padding: 30,
    shadowColor: COLORS.black,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    height: 300,
    width: 200
  },
  textContainer: {
    flex: 0
  }
});

export default styles;
