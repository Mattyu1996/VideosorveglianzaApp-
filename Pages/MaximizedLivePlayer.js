import { Video } from "expo-av";
import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useFocusEffect } from "@react-navigation/native";

export default function MaximizedLivePlayer({ route, navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({
    isPlaying: true,
  });
  const { videoUrl } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        ScreenOrientation.lockAsync(
          ScreenOrientation.OrientationLock.PORTRAIT_UP
        );
      };
    }, [])
  );

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{
          uri: videoUrl,
        }}
        shouldPlay={true}
        resizeMode="stretch"
        onPlaybackStatusUpdate={(status) => {
          setStatus(status);
        }}
      />
      <View style={styles.buttons}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ef6c00",
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    alignSelf: "center",
    width: "100%",
    height: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
