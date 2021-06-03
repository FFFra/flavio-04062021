import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

console.log = Reactotron.logImportant;
console.info = Reactotron.logImportant;

const reactotron = Reactotron.setAsyncStorageHandler(false)
  .configure()
  .use(reactotronRedux())
  .use(sagaPlugin())
  .useReactNative()
  .connect();

export default reactotron;
