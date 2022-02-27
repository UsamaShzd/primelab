import 'react-native-gesture-handler';
import React from 'react';
import {useColorScheme} from 'react-native';
import MyApp from './src/MyApp';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return <MyApp />;
};

export default App;
