import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, FlatList, ViewPropTypes } from 'react-native';

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
  data: PropTypes.array.isRequired,
  renderItem: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default React.memo(Component);
