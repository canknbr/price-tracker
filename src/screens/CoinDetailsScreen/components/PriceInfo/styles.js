import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  name: {
    color: 'white',
    fontSize: 15,
  },
  priceContainer: {
    paddingVertical: 20,
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
});
