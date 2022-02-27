import React from 'react';
import MainNav from './navigation/MainNav';
import {Provider as PaperProvider} from 'react-native-paper';
import {Provider as ReduxProvider} from 'react-redux';
import store from './store/store';

const MyApp: React.FC = () => {
  return (
    <ReduxProvider store={store}>
      <PaperProvider>
        <MainNav />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default MyApp;
