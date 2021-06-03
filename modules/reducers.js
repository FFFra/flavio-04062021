import { combineReducers } from 'redux';

import orderbookReducer from './orderbook/reducer';

const rootReducer = combineReducers({
  orderbook: orderbookReducer,
});

export default rootReducer;
