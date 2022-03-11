import * as React from 'react';
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./Pages/HomePage";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Pages/LoginPage';
import FourPlayer from './Pages/FourLivePlayer';
import MaximizedLivePlayer from './Pages/MaximizedLivePlayer';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer independent="true">
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="FourPlayer" component={FourPlayer} />
        <Stack.Screen name="MaximizedPlayer" component={MaximizedLivePlayer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

