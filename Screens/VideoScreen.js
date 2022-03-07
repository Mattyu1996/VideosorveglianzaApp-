import { Text, View, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function VideoScreen() {
  return (
    <LinearGradient colors={["#da8f52", "#ef6c00"]} style={styles.gradient}>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Video!</Text>
      </View>
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
  list: {
    width: "100%",
    paddingVertical: 30,
  },
});
