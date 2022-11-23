import { View, Text } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

import styles from './styles';
const PriceInfo = ({ name, current_price, price_change_percentage_24h }) => {
  const percentageColor =
    price_change_percentage_24h < 0 ? '#fc5c65' : '#4cd964';

  return (
    <View style={styles.priceContainer}>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.currentPrice}>${current_price.usd}</Text>
      </View>
      <View
        style={{
          borderRadius: 5,
          paddingHorizontal: 5,
          flexDirection: 'row',
          backgroundColor: percentageColor,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <AntDesign
          name={price_change_percentage_24h < 0 ? 'caretdown' : 'caretup'}
          size={12}
          style={{
            alignSelf: 'center',
            marginHorizontal: 10,
          }}
          color="white"
        />
        <Text style={styles.priceChange}>
          {price_change_percentage_24h.toFixed(2)} %
        </Text>
      </View>
    </View>
  );
};

export default PriceInfo;
