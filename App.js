import React from 'react';
import { View } from 'react-native';

import { Provider } from 'react-redux';

import { RootNavigation } from './utils/RootNavigation';
import { getStore, initStore } from './modules/store';
import reducers from './modules/reducers';
import sagas from './modules/sagas';

let store;

if (__DEV__) {
  import('./reactotron.config').then(() => console.log('Reactotron Configured'));
}

initStore(reducers, sagas);
store = getStore();

const App = () => {
  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <Provider store={store}>
        <RootNavigation />
      </Provider>
    </View>
  );
};

export default App;
