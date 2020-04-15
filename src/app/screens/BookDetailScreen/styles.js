import { StyleSheet } from 'react-native';
import { COLORS } from '@constants/colors';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.grayLight,
    flex: 1,
    justifyContent: 'center'
  },
  detailContainer: {
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
  },
  book: {
    flexDirection: 'row',
    marginBottom: 20
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
  addButton: {
    backgroundColor: COLORS.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: COLORS.blue,
    marginBottom: 10
  },
  addButtonText: {
    color: COLORS.blue
  },
  rentButton: {
    backgroundColor: COLORS.blue
  },
  rentButtonText: {
    color: COLORS.white
  },
  available: {
    color: COLORS.green
  }
});

export default styles;
