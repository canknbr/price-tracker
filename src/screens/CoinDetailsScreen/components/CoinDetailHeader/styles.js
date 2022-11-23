import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tickerContainer: { flexDirection: 'row', alignItems: 'center' },
  image: {
    width: 25,
    height: 25,
  },
  ticketTitle: {
    color: 'white',
    fontWeight: 'bold',
    marginHorizontal: 10,
    fontSize: 18,
  },
  rankContainer: {
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    paddingVertical: 3,
    borderRadius: 5,
  },
});
