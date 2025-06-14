import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/index';
import Settings from '../screens/Settings';
import Schedule from '../screens/Schedule';
import Manual from '../screens/Manual';
import Calibrate from '../screens/Calibrate';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerBackVisible: false, headerShown: false }}
        />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Schedule" component={Schedule} />
        <Stack.Screen name="Manual" component={Manual} />
        <Stack.Screen name="Calibrate" component={Calibrate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;