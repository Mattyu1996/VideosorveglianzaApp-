import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

export default function PrimaryButton(props) {
  const { style, onPress, title = "Press" } = props;

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: pressed ? "#ef6c00" : "white",
        },
        style,
        styles.button,
      ]}
      onPress={onPress}
    >
      {({ pressed }) =>
        pressed ? (
          <Text style={styles.textPressed}>{title}</Text>
        ) : (
          <Text style={styles.text}>{title}</Text>
        )
      }
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 30,
    elevation: 5,
  },
  text: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "#ef6c00",
  },
  textPressed: {
    fontSize: 22,
    lineHeight: 30,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});
