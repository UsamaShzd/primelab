import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import AuthScreen from '../screens/AuthScreen';
import HomeScreen from '../screens/HomeScreen';

const {Navigator, Screen} = createStackNavigator();

const StackNav: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Auth" component={AuthScreen} />
      <Screen name="Home" component={HomeScreen} />
    </Navigator>
  );
};

export default StackNav;
