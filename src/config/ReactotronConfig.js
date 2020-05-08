import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { NativeModules } from 'react-native';

// grabs the ip address
const host = NativeModules.SourceCode.scriptURL.split('://')[1].split(':')[0];

const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({ name: 'WBooks', host })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

export default reactotron;
