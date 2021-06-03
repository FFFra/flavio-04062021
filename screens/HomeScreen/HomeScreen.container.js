import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';

import { initOrderbook } from '../../modules/orderbook/actions';

const mapDispatchToProps = (dispatch) => {
  return {
    initOrderbook: (symbol) => dispatch(initOrderbook(symbol)),
  };
};

export default connect(null, mapDispatchToProps)(HomeScreen);
