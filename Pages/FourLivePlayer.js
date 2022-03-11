import { Video } from "expo-av";
import * as React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";
import { useFocusEffect } from "@react-navigation/native";

export default function FourLivePlayer({ navigation }) {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});

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
      <View style={styles.row}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://nms.ccml.it/live/cam1/index.m3u8",
          }}
          shouldPlay={true}
          isMuted={true}
          resizeMode="stretch"
          onPlaybackStatusUpdate={(status) => {
            setStatus(status);
          }}
        />
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://nms.ccml.it/live/cam2/index.m3u8",
          }}
          shouldPlay={true}
          isMuted={true}
          resizeMode="stretch"
          onPlaybackStatusUpdate={(status) => {
            setStatus(status);
          }}
        />
      </View>
      <View style={styles.row}>
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://nms.ccml.it/live/cam3/index.m3u8",
          }}
          shouldPlay={true}
          isMuted={true}
          resizeMode="stretch"
          onPlaybackStatusUpdate={(status) => {
            setStatus(status);
          }}
        />
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: "https://nms.ccml.it/live/cam4/index.m3u8",
          }}
          shouldPlay={true}
          isMuted={true}
          resizeMode="stretch"
          onPlaybackStatusUpdate={(status) => {
            setStatus(status);
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    backgroundColor: "#ef6c00",
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  row: {
    height: "50%",
    width: "100%",
    flexDirection: "row",
  },
  video: {
    alignSelf: "center",
    width: "50%",
    height: "100%",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
