import { View, Text, Image } from 'react-native';
import React from 'react';
import { Ionicons, EvilIcons } from '@expo/vector-icons';
import styles from './styles';
const CoinDetailHeader = ({ small, symbol, market_cap_rank }) => {
  return (
    <View style={styles.headerContainer}>
      <Ionicons name="ios-arrow-back" size={30} color="white" />
      <View style={styles.tickerContainer}>
        <Image source={{ uri: small }} style={styles.image} />
        <Text style={styles.ticketTitle}>{symbol.toUpperCase()}</Text>
        <View style={styles.rankContainer}>
          <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>
            #{market_cap_rank}
          </Text>
        </View>
      </View>
      <EvilIcons name="user" size={30} color="white" />
    </View>
  );
};

export default CoinDetailHeader;
