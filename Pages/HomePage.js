import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Text } from "react-native";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LiveScreen from "../Screens/LiveScreen";
import VideoScreen from "../Screens/VideoScreen";
import { Ionicons } from '@expo/vector-icons';
import React, {useEffect} from 'react';
import videosApiCall from '../Redux/Actions/videoActionCreator';
import camerasApiCall from '../Redux/Actions/cameraActionCreator';
import {useDispatch, useSelector} from 'react-redux';

const Tab = createMaterialTopTabNavigator();


function Home({navigation}) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(videosApiCall());
    dispatch(camerasApiCall());
  }, []);

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


  const showAllCameras = () => {
    navigation.navigate('FourPlayer');
  };

  const showOneCamera = (videoUrl) => {
    navigation.navigate('MaximizedLivePlayer',{videoUrl: videoUrl});
  };

  const playVideo = (videoUrl) => {
    console.log(videoUrl);
    navigation.navigate('MaximizedPlayer',{videoUrl: videoUrl});
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <NavigationContainer independent="true">
        <Tab.Navigator screenOptions={tabBarStyle}>
          <Tab.Screen
            name="Live"
            children={()=><LiveScreen showAllCameras={showAllCameras} showOneCamera={showOneCamera}/>}
            tabBarAccessibilityLabel="Live"
            options={{
              tabBarIcon: ({ color, size }) => (
                <Ionicons name="videocam" color={color} size={size}  style={styles.icon}/>
              ),
            }}
          />
          <Tab.Screen
            name="Video"
            children={()=><VideoScreen playVideo={playVideo}/>}
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

export default Home;