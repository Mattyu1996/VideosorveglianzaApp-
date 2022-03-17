import { Text, View, StyleSheet, ImageBackground } from "react-native";
import IconButton from "./IconButton";
export default function CameraCard(props) {
  const { title, onPlay, thumbnail } = props;

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{title}</Text>
      <View style={styles.innerContainer}>
        <ImageBackground source={{uri: thumbnail}} imageStyle={{ borderBottomRightRadius: 30, borderBottomLeftRadius: 30}} resizeMode="cover" style={styles.image}>
          <View style={{margin:15}}>
            <IconButton size={50} name="play" onPress={onPlay}></IconButton>
          </View>
          
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 200,
    width: 350,
    alignSelf: "center",
    marginBottom: 20,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    borderRadius: 30,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  innerContainer: {
    height: "80%",
    width: "100%",
    backgroundColor: "#f5f5f5",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
  },
  heading: {
    fontSize: 25,
    color: "#ef6c00",
    marginLeft: 15,
    marginBottom: 5,
  },
  image:{
    flex: 1,
    width: '100%',
    borderRadius: 30,
    alignItems: "flex-start",
    justifyContent: "flex-end",
  }
});
