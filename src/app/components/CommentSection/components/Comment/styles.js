import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15
  },
  image: {
    borderRadius: 50,
    height: 45,
    marginRight: 15,
    width: 45
  },
  info: {
    flexDirection: 'column',
    flex: 1
  },
  user: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  text: {
    fontSize: 15
  }
});

export default styles;
