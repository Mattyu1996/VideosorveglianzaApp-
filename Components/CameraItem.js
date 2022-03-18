import { Image, Pressable, StyleSheet, Text, View } from "react-native";

export default function CameraItem(props) {
  const { title, onPress, cameraId, first } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#f5f5f5" : "transparent",
          borderTopWidth: first ? 1 : 0,
        },
        styles.pressable,
      ]}
      onPress={onPress}
    >
      <View style={styles.item}>
        <View style={styles.itemIconContainer}>
          <Image
            style={styles.itemIcon}
            source={require("../assets/cameraIcon.png")}
          />
        </View>
        <Text style={styles.itemTitle}>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pressable: {
    width: "100%",
    borderColor: "#f5f5f5",
    borderBottomWidth: 1,
  },
  item: {
    width: "100%",
    height: 80,
    paddingLeft: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  itemIconContainer: {
    backgroundColor: "#ef6c00",
    borderRadius: 50,
    width: 50,
    height: 50,
    marginRight: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  itemIcon: {
    width: 30,
    height: 30,
  },
  itemTitle: {
    fontSize: 20,
    color: "#777777",
  },
});
