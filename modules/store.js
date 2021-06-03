import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';

import Reactotron from '../reactotron.config';

import Setup from '../setup';

let store;

const DEBUG_REDUX = Setup.DEBUG_REDUX;
const sagaMiddleware = createSagaMiddleware();

export const initStore = (reducers, sagas) => {
  const middlewareConf = applyMiddleware(sagaMiddleware);
  store = createStore(
    reducers,
    DEBUG_REDUX ? composeWithDevTools(middlewareConf, Reactotron.createEnhancer()) : middlewareConf
  );
  sagaMiddleware.run(sagas);

  return store;
};

export const getStore = () => {
  return store;
};
