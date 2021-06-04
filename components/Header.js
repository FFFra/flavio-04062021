import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, ViewPropTypes, Text } from 'react-native';

import Colors from '../utils/Colors';

const Header = ({ firstColumn, secondColumn, thirdColumn, containerStyle }) => {
  return (
    <View style={[[styles.container, containerStyle]]}>
      <Text style={styles.title}>{firstColumn.toUpperCase()}</Text>
      <Text style={styles.title}>{secondColumn.toUpperCase()}</Text>
      <Text style={styles.title}>{thirdColumn.toUpperCase()}</Text>
    </View>
  );
};

Header.propTypes = {
  containerStyle: ViewPropTypes.style,
  firstColumn: PropTypes.string.isRequired,
  secondColumn: PropTypes.string.isRequired,
  thirdColumn: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    color: Colors.grey,
    fontSize: 15,
  },
});

export default React.memo(Header);
