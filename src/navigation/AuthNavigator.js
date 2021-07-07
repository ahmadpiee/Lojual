import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Login from '../screens/auth/Login';
import Register from '../screens/auth/Register';
import WelcomeScreen from '../screens/auth/WelcomeScreen';

const Stack = createStackNavigator();
const AuthNavigator = () => (
  <Stack.Navigator mode="modal" headerMode="float">
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Register" component={Register} />
  </Stack.Navigator>
);

export default AuthNavigator;
