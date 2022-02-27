import React from 'react';
import MainNav from './navigation/MainNav';
import {Provider as PaperProvider} from 'react-native-paper';

const MyApp: React.FC = () => {
  return (
    <PaperProvider>
      <MainNav />
    </PaperProvider>
  );
};

export default MyApp;
