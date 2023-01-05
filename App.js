/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import type {Node} from 'react';
import React from 'react';
import {AsyncStorage, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/views/Navigator/AppNavigator';
import TabNavigator from './src/views/Navigator/TabNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from './src/views/home/HomeView';
import DetailItem from './src/views/detail/DetailItem';
import Register from './src/views/Form/Register';

const Stack = createNativeStackNavigator();
let isLogged = true;
let _connected = AsyncStorage.setItem();
_connected = async () => {
  try {
    await AsyncStorage.setItem('@connected', true);
  } catch (error) {
    // Error saving data
  }
};

let _retrieveData;
_retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('@connected');
    if (value !== false) {
      // We have data!!
      console.log(value);
      isLogged = true;
    }
  } catch (error) {
    // Error retrieving data
  }
};

const App: () => Node = () => {
  if (isLogged) {
    return <Register />;
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="TabNav"
            component={TabNavigator}
            options={{headerShown: false}}
          />
          <Stack.Screen name="Home" component={HomeView} />
          <Stack.Screen name="Details" component={DetailItem} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
