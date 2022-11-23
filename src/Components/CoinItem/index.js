import { View, Text, StyleSheet, Image } from 'react-native';
import React from 'react';
import styles from './style';
import { AntDesign } from '@expo/vector-icons';

const CoinItem = ({ coin }) => {
  const {
    name,
    image,
    current_price,
    market_cap_rank,
    price_change_percentage_24h,
    symbol,
    market_cap,
  } = coin;
  const normalizeMarketCap = marketcap => {
    if (marketcap > 1_000_000_000_000) {
      return Math.floor(marketcap / 1_000_000_000_000) + 'T';
    }
    if (marketcap >= 1_000_000_000) {
      return Math.floor(marketcap / 1_000_000_000) + 'B';
    }
    if (marketcap >= 1_000_000) {
      return Math.floor(marketcap / 1_000_000) + 'M';
    }
    if (marketcap >= 1_000) {
      return Math.floor(marketcap / 1_000) + 'K';
    }
    return marketcap;
  };
  const percentageColor =
    price_change_percentage_24h < 0 ? '#fc5c65' : '#4cd964';

  return (
    <View style={styles.coinContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.coinImage}
      />
      <View style={styles.coinContent}>
        <Text style={styles.title}>{name}</Text>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.rankContainer}>
            <Text style={styles.rank}>{market_cap_rank}</Text>
          </View>
          <Text style={styles.text}>{symbol.toUpperCase()}</Text>
          <AntDesign
            name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
            size={12}
            style={{
              alignSelf: 'center',
              marginHorizontal: 5,
            }}
            color={percentageColor}
          />
          <Text style={{ color: percentageColor }}>
            {price_change_percentage_24h.toFixed(2)}%
          </Text>
        </View>
      </View>
      <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
        <Text style={styles.title}>{current_price} </Text>
        <Text style={{ color: 'white' }}>
          MCap {normalizeMarketCap(market_cap)}{' '}
        </Text>
      </View>
    </View>
  );
};

export default CoinItem;
