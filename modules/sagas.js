import { all } from 'redux-saga/effects';
import orderbookSaga from './orderbook/sagas';

export default function* rootSaga() {
  yield all([...orderbookSaga]);
}
