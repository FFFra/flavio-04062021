import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, FlatList, ViewPropTypes } from 'react-native';

import { sortBy } from 'lodash';

import OrderRow from './OrderRow';

import { generateKey } from '../utils/Helpers';

const Component = ({ containerStyle, data, renderItem }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={() => generateKey()}
        reversed
        scrollEnabled={false}
      />
    </View>
  );
};

Component.propTypes = {
  containerStyle: ViewPropTypes.style,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(Component);
