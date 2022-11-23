import { View, Text, FlatList } from 'react-native';
import React from 'react';
import CoinItem from '../../Components/CoinItem';
import cryptocurrencies from '../../../data/cryptocurrencies';
const HomeScreen = () => {
  return (
    <FlatList
      data={cryptocurrencies}
      renderItem={({ item }) => <CoinItem coin={item} />}
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
