import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  book: {
    backgroundColor: COLORS.white,
    borderRadius: 5,
    elevation: 1,
    flexDirection: 'row',
    margin: 20,
    padding: 20,
    shadowColor: COLORS.black,
    shadowOffset: { width: 1, height: 2 },
    shadowOpacity: 0.9
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  image: {
    height: 100,
    marginRight: 15,
    width: 70
  },
  textContainer: {
    flex: 1
  }
});

export default styles;
