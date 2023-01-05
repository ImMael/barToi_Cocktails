import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from '../home/HomeView';
import DetailItem from '../detail/DetailItem';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'Home'}>
      <Stack.Screen name="TabNav" component={TabNavigator} />
      <Stack.Screen name="Home" component={HomeView} />
      <Stack.Screen name="Details" component={DetailItem} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
