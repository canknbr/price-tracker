import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  name: {
    color: 'white',
    fontSize: 15,
  },
  priceContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  currentPrice: {
    color: 'white',
    fontSize: 30,
    fontWeight: '600',
    letterSpacing: 1,
  },
  priceChange: {
    color: 'white',
    fontSize: 17,
    fontWeight: '600',
  },
  input: {
    flex: 1,
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    padding: 10,
    fontSize: 18,
    color: 'white',
  },
});
