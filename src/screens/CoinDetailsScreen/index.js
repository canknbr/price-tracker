import { View, Text, Image } from 'react-native';
import React from 'react';
import coin from '../../../data/crypto.json';
import styles from './styles';
import CoinDetailHeader from './components/CoinDetailHeader';
const CoinDetailScreen = () => {
  const {
    image: { small },
    name,
    market_data: { market_cap_rank },
    symbol,
  } = coin;
  return (
    <View style={styles.container}>
      <CoinDetailHeader
        small={small}
        symbol={symbol}
        market_cap_rank={market_cap_rank}
      />
    </View>
  );
};

export default CoinDetailScreen;
