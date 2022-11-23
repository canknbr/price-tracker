import { View, Text, Image } from 'react-native';
import React from 'react';
import coin from '../../../data/crypto.json';
import styles from './styles';
import CoinDetailHeader from './components/CoinDetailHeader';
import PriceInfo from './components/PriceInfo';
const CoinDetailScreen = () => {
  const {
    image: { small },
    name,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
    symbol,
  } = coin;

  return (
    <View style={styles.container}>
      <CoinDetailHeader
        small={small}
        symbol={symbol}
        market_cap_rank={market_cap_rank}
      />
      <PriceInfo
        name={name}
        current_price={current_price}
        price_change_percentage_24h={price_change_percentage_24h}
      />
    </View>
  );
};

export default CoinDetailScreen;
