import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LiveScreen from "../Screens/LiveScreen";
import VideoScreen from "../Screens/VideoScreen";
import { Ionicons } from '@expo/vector-icons';
const Tab = createMaterialTopTabNavigator();


export default function Home() {
  const tabBarStyle = {
    tabBarLabelStyle: {
      textTransform: "capitalize",
      fontSize: 20,
      fontWeight: "bold",
    },
    tabBarItemStyle: {
      paddingTop: 10,
      paddingBottom: 10,
      flexDirection: 'row'
    },
    tabBarIndicatorStyle: {
      backgroundColor: "#ef6c00",
      height: "100%",
    },
    tabBarActiveTintColor: "white",
    tabBarInactiveTintColor: "#ef6c00",
    tabBarIconStyle:{
      marginRight: 10
    },
    tabBarShowIcon: true,
  };

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Tab.Navigator screenOptions={tabBarStyle}>
          <Tab.Screen
            name="Live"
            component={LiveScreen}
            tabBarAccessibilityLabel="Live"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="videocam" color={color} size={size}  style={styles.icon}/>
              ),
            }}
          />
          <Tab.Screen
            name="Video"
            component={VideoScreen}
            tabBarAccessibilityLabel="Video"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="document" color={color} size={size}  style={styles.icon}/>
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingTop: 50,
    backgroundColor: "#ef6c00",
  },
  icon:{
    fontSize: 25  
  }
});
