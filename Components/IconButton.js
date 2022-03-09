import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, StyleSheet } from "react-native";

export default function IconButton(props) {
  const { onPress, name, size } = props;


  const styles = StyleSheet.create({
    button: {
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderRadius: size,
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
            <Ionicons name={name} color="red" size={size/2.5} style={styles.iconPressed} />
        ) : (
            <Ionicons name={name} color="red" size={size/2.5} style={styles.icon} />
        )
      }
    </Pressable>
  );

}


