import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TextInput, Image, FlatList } from "react-native";
import { FAB } from 'react-native-elements';
import CameraCard from "../Components/CameraCard";
export default function LiveScreen() {
  return (
    <LinearGradient colors={["#da8f52", "#ef6c00"]} style={styles.gradient}>
        <FlatList style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 40
        }}
        data={[
          {key: 'Camera 1'},
          {key: 'Camera 2'},
          {key: 'Camera 3'},
          {key: 'Camera 4'}
        ]}
        renderItem={({item}) => <CameraCard title={item.key}></CameraCard>}
      />
      <FAB
        style={{marginBottom: 50}}
          visible={true}
          icon={{ name: 'fullscreen', color: 'white' }}
          color="#ef6c00"
          placement="right"
          onPress={() =>console.log('fullscreen')}
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
