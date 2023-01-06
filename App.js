/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/views/Navigator/TabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from './src/views/home/HomeView';
import DetailItem from './src/views/detail/DetailItem';
import Register from './src/views/Form/Register';
import Login from './src/views/Form/Login';
const Stack = createNativeStackNavigator();

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Home" component={HomeView} />
        <Stack.Screen name="Details" component={DetailItem} />
        <Stack.Screen name="Register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
