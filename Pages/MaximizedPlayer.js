import { useFocusEffect } from "@react-navigation/native";
import { Video } from "expo-av";
import * as ScreenOrientation from "expo-screen-orientation";
import * as React from "react";
import { StyleSheet, View } from "react-native";

export default function MaximizedLivePlayer({ route }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({
    isPlaying: true,
  });
  const { videoUrl } = route.params;

  useFocusEffect(
    React.useCallback(() => {
      // ON ENTER
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
      return () => {
        // ON EXIT
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
        useNativeControls
        shouldPlay={true}
        resizeMode="stretch"
        onPlaybackStatusUpdate={(status) => {
          console.log(status);
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
