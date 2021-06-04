import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ViewPropTypes, Text } from 'react-native';

import Colors from '../utils/Colors';

const OrderRow = ({ containerStyle, price, size, total, priceStyle }) => {
  return (
    <View>
      <View style={[[styles.container, containerStyle]]}>
        <Text style={[styles.text, priceStyle]}>{`${price}`}</Text>
        <Text style={styles.text}>{`${size}`}</Text>
        <Text style={styles.text}>{`${total}`}</Text>
      </View>
    </View>
  );
};

OrderRow.propTypes = {
  containerStyle: ViewPropTypes.style,
  price: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  price: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexBasis: 'auto',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  text: {
    flex: 1,
    color: Colors.primary,
    textAlign: 'center',
  },
});

export default React.memo(OrderRow);
