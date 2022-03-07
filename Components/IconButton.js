import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

export default function IconButton(props) {
  const { onPress, name } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#ef6c00" : "white",
        },
        styles.button,
      ]}
      onPress={onPress}
    >
      {({ pressed }) =>
        pressed ? (
            <Ionicons name={name} color="red" size="20" style={styles.iconPressed} />
        ) : (
            <Ionicons name={name} color="red" size="20" style={styles.icon} />
        )
      }
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    elevation: 5,
  },
  icon: {
    fontSize: 22,
    color: "#ef6c00",
  },
  iconPressed: {
    fontSize: 22,
    color: "white",
  },
});
