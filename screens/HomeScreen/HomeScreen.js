import React, { useEffect } from 'react';
import { View } from 'react-native';

const HomeScreen = ({ initOrderbook }) => {
  useEffect(() => {
    initOrderbook('PI_XBTUSD');
  }, []);

  return <View style={{ flex: 1 }} />;
};

export default HomeScreen;
