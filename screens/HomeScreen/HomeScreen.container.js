import { connect } from 'react-redux';
import HomeScreen from './HomeScreen';

import { initOrderbook } from '../../modules/orderbook/actions';
import { bidsOrdersSelector, asksOrdersSelector } from '../../modules/orderbook/selectors';

const makeMapStateToProps = () => {
  const mapStateToProps = (state, ownProps) => {
    return {
      bids: bidsOrdersSelector(state),
      asks: asksOrdersSelector(state),
    };
  };
  return mapStateToProps;
};

const mapDispatchToProps = (dispatch) => {
  return {
    initOrderbook: (symbol) => dispatch(initOrderbook(symbol)),
  };
};

export default connect(makeMapStateToProps, mapDispatchToProps)(HomeScreen);
