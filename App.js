import * as React from "react";
import { Provider } from "react-redux";
import Home from "./Pages/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./Pages/LoginPage";
import FourPlayer from "./Pages/FourLivePlayer";
import MaximizedLivePlayer from "./Pages/MaximizedLivePlayer";
import MaximizedPlayer from "./Pages/MaximizedPlayer";
import {store} from './Redux/store';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer independent="true">
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="FourPlayer" component={FourPlayer} />
          <Stack.Screen
            name="MaximizedLivePlayer"
            component={MaximizedLivePlayer}
          />
          <Stack.Screen name="MaximizedPlayer" component={MaximizedPlayer} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
