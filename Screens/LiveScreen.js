import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TextInput, Image, FlatList } from "react-native";
import { FAB } from 'react-native-elements';
import CameraCard from "../Components/CameraCard";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
export default function LiveScreen(props) {

  const { showAllCameras, showOneCamera } = props;

  return (
    <LinearGradient colors={["#da8f52", "#ef6c00"]} style={styles.gradient}>
        <FlatList style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 40
        }}
        data={[
          {key: 'Camera 1', cameraId: 1},
          {key: 'Camera 2', cameraId: 2},
          {key: 'Camera 3', cameraId: 3},
          {key: 'Camera 4', cameraId: 4}
        ]}
        renderItem={({item}) => <CameraCard title={item.key} onPlay={()=>{showOneCamera(item.cameraId)}}></CameraCard>}
      />
      <FAB
        style={{marginBottom: 50}}
          visible={true}
          icon={{ name: 'fullscreen', color: 'white' }}
          color="#ef6c00"
          placement="right"
          onPress={showAllCameras}
        />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  list:{
      width: '100%',
      paddingVertical: 30
  }
});
