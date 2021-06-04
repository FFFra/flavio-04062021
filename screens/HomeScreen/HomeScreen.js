import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';

import Colors from '../../utils/Colors';

import Header from '../../components/Header';
import OrderRow from '../../components/OrderRow';
import Orderbook from '../../components/Orderbook';

const HomeScreen = ({ initOrderbook, bids, asks }) => {
  useEffect(() => {
    initOrderbook('PI_XBTUSD');
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1, padding: 10 }}>
        <Header firstColumn={'price'} secondColumn={'size'} thirdColumn={'total'} />
        <Orderbook data={bids.reverse()} renderItem={renderBid}></Orderbook>
      </View>
      <View style={{ flex: 1, padding: 10 }}>
        <Header firstColumn={'price'} secondColumn={'size'} thirdColumn={'total'} />
        <Orderbook data={asks.reverse()} renderItem={renderAsk}></Orderbook>
      </View>
    </View>
  );
};

const renderBid = ({ item, index }) => {
  const { price, size, total } = item;

  return <OrderRow price={price} size={size} total={total} priceStyle={{ color: Colors.green }} />;
};
const renderAsk = ({ item, index }) => {
  const { price, size, total } = item;

  return <OrderRow price={price} size={size} total={total} priceStyle={{ color: Colors.red }} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.dark,
    padding: 20,
  },
});

export default HomeScreen;
