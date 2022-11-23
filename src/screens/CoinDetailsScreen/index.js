import { View, Text, Dimensions, TextInput } from 'react-native';
import React, { useState, useEffect } from 'react';
import {
  ChartDot,
  ChartPath,
  ChartPathProvider,
  ChartYLabel,
} from '@rainbow-me/animated-charts';
import { AntDesign } from '@expo/vector-icons';

import coin from '../../../data/crypto.json';
import styles from './styles';
import CoinDetailHeader from './components/CoinDetailHeader';

const CoinDetailScreen = () => {
  const { width } = Dimensions.get('window');
  const {
    image: { small },
    name,
    market_data: {
      market_cap_rank,
      current_price,
      price_change_percentage_24h,
    },
    symbol,
    prices,
  } = coin;
  const [coinValue, setCoinValue] = useState('1');
  const [usdValue, setUsdValue] = useState(current_price.usd.toString());
  const changeCoinValue = value => {
    setCoinValue(value);
    const floatedValue = parseFloat(value.replace(',', '.')) || 0;
    setUsdValue((floatedValue * current_price.usd).toString());
  };
  const changeUsdValue = value => {
    setUsdValue(value);
    const floatedValue = parseFloat(value.replace(',', '.')) || 0;
    setCoinValue((floatedValue / current_price.usd).toString());
  };
  useEffect(() => {}, [coinValue]);
  useEffect(() => {}, [usdValue]);

  const percentageColor =
    price_change_percentage_24h < 0 ? '#fc5c65' : '#4cd964';
  const formatCurrency = value => {
    'worklet';
    if (value == '') {
      return `$${current_price.usd.toFixed(2)}`;
    }
    return `$${parseFloat(value.toFixed(2))}`;
  };
  const chatColor = current_price.usd > prices[0][1] ? '#4cd964' : '#fc5c65';
  return (
    <View style={styles.container}>
      <ChartPathProvider
        data={{
          points: prices.map(prices => ({
            x: prices[0],
            y: prices[1],
          })),
          smoothingStrategy: 'bezier',
        }}
      >
        <CoinDetailHeader
          small={small}
          symbol={symbol}
          market_cap_rank={market_cap_rank}
        />
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.name}>{name}</Text>
            <ChartYLabel format={formatCurrency} style={styles.currentPrice} />
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
        <View>
          <ChartDot style={{ backgroundColor: chatColor }} />

          <ChartPath
            height={width / 2}
            stroke={chatColor}
            width={width}
            strokeWidth={2}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>
              {symbol.toUpperCase()}
            </Text>
            <TextInput
              style={styles.input}
              value={coinValue}
              keyboardType="numeric"
              onChangeText={changeCoinValue}
              changeUsdValue
            />
          </View>

          <View style={{ flexDirection: 'row', flex: 1 }}>
            <Text style={{ color: 'white', alignSelf: 'center' }}>USD</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={usdValue}
              onChangeText={changeUsdValue}
            />
          </View>
        </View>
      </ChartPathProvider>
    </View>
  );
};

export default CoinDetailScreen;
