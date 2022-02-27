import React from 'react';
import MainNav from './navigation/MainNav';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from './store/store';

const MyApp: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <PersistGate persistor={persistor}>
        <PaperProvider>
          <MainNav />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default MyApp;
