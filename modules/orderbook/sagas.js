import { call, takeLatest, take, put } from 'redux-saga/effects';
import { eventChannel } from 'redux-saga';

import { formatOrderbook } from './formatter';

import { storeOrderbook } from './actions';

function connectWebSocket() {
  const url = 'wss://www.cryptofacilities.com/ws/v1';

  const socket = new WebSocket(url);

  return socket;
}

const createSocketChannel = (socket, asset) => {
  const { payload } = asset;

  const subscription = {
    event: 'subscribe',
    feed: 'book_ui_1',
    product_ids: [payload],
  };

  socket.onopen = () => {
    return socket.send(JSON.stringify(subscription));
  };

  return eventChannel((emit) => {
    const messageHandler = (event) => emit(event);

    socket.onmessage = (event) => messageHandler(event);

    const unsubscribe = () => {
      socket.onclose = () => {
        console.log('socket closed');
      };
    };
    return unsubscribe;
  });
};

const closeSocket = (socket) => {
  const unsubscribe = () => {
    socket.onclose = () => {
      console.log('socket closed');
    };
  };
  return unsubscribe;
};

function* initOrderbookSaga(asset) {
  try {
    const socket = yield call(connectWebSocket);

    const channel = yield call(createSocketChannel, socket, asset);

    while (true) {
      const payload = yield take(channel);

      const data = JSON.parse(payload.data);

      const orderbookFormatted = formatOrderbook(data);

      yield put(storeOrderbook(orderbookFormatted));
    }
  } catch (e) {
  } finally {
  }
}

const homeScreenSaga = [takeLatest('INIT_ORDERBOOK', initOrderbookSaga)];

export default homeScreenSaga;
