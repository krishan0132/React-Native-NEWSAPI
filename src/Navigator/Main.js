import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import NewsScreen from './NewsScreen';

const Stack = createStackNavigator();

const Main = () => {
  return (
   <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="NewsScreen" component={NewsScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
   </NavigationContainer>
   
   
  );
};

export default Main;