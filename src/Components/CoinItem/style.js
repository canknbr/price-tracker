import { StyleSheet } from 'react-native';

export default styles = StyleSheet.create({
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 0.3,
    borderBottomColor: '#282828',
    paddingVertical: 15,
    paddingHorizontal: 10,
  },
  coinImage: {
    width: 30,
    height: 30,
    marginRight: 10,
    alignSelf: 'center',
  },

  title: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  text: {
    color: '#fff',
    fontSize: 14,
    marginRight: 5,
  },
  rankContainer: {
    marginRight: 5,
    backgroundColor: '#585858',
    paddingHorizontal: 5,
    borderRadius: 5,
  },
  rank: {
    fontWeight: 'bold',
    color: '#fff',
  },
});
