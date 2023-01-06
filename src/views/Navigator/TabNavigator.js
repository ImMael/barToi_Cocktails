import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeView from '../home/HomeView';
import About from '../About/About';
import Login from '../Form/Login';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeView} />
      <Tab.Screen name="About" component={About} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
