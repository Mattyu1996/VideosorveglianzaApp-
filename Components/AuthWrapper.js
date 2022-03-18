import * as React from "react";
import { useSelector } from "react-redux";
import Home from "../Pages/HomePage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../Pages/LoginPage";
import FourPlayer from "../Pages/FourLivePlayer";
import MaximizedLivePlayer from "../Pages/MaximizedLivePlayer";
import MaximizedPlayer from "../Pages/MaximizedPlayer";
import LocalStorage from "../Services/LocalStorage";

const Stack = createNativeStackNavigator();

export default function AuthWrapper(){

    const authToken = useSelector(state => state.authReducer.token);
    const [isAuthenticated, setIsAuthenticated] = React.useState();
    const localStorage = new LocalStorage();
    // localStorage.saveToken("");
    localStorage.getToken().then(token => {
      if(token!="" && token !=null){
        console.log('GIA AUTENTICATO');
        setIsAuthenticated(true);
      }
      else {
        console.log('MI DEVO AUTENTICARE');
        setIsAuthenticated(false);
      }
    });
  
    return (
      <>
        <NavigationContainer independent="true">
          <Stack.Navigator screenOptions={{ headerShown: false }}>
          {isAuthenticated ? (
              <>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="FourPlayer" component={FourPlayer} />
                <Stack.Screen
                  name="MaximizedLivePlayer"
                  component={MaximizedLivePlayer}
                />
                <Stack.Screen name="MaximizedPlayer" component={MaximizedPlayer} />
              </>
            ) :(
                <Stack.Screen name="Login" children={()=>
                  <Login setAuthenticated={setIsAuthenticated}  />
                }/>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </>
    );

}