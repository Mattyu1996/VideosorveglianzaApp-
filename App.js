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
import LocalStorage from "./Services/LocalStorage";
const Stack = createNativeStackNavigator();

export default function App() {

  const localStorage = new LocalStorage();

  localStorage.getToken().then(token => {
    if(token!= ""){
      console.log('GIA AUTENTICATO');
      // navigation.navigate('Home');
    }
    else {
      console.log('MI DEVO AUTENTICARE');
      dispatch(authCall("ADMIN", "1248"));
    }
  });

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
