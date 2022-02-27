import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// Screens
import AuthScreen from '../screens/AuthScreen';

const {Navigator, Screen} = createStackNavigator();

const StackNav: React.FC = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Auth" component={AuthScreen} />
    </Navigator>
  );
};

export default StackNav;
