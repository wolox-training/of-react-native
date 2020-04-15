import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: 15
  },
  user: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  image: {
    borderRadius: 50,
    height: 45,
    marginRight: 15,
    width: 45
  },
  text: {
    fontSize: 15,
    flex: 1,
    flexShrink: 1
  }
});

export default styles;
