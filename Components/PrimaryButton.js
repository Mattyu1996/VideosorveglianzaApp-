import React from "react";
import { Pressable, StyleSheet, Text } from "react-native";

export default function PrimaryButton(props) {
  const { style, onPress, reverse, title = "Press" } = props;


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
      color: reverse ? "white" : "#ef6c00",
    },
    textPressed: {
      fontSize: 22,
      lineHeight: 30,
      fontWeight: "bold",
      letterSpacing: 0.25,
      color: reverse ? "#ef6c00" : "white",
    },
  });

  const getBackgroundColor = (pressed) =>{
    if(reverse){
      return pressed ? "white" : "#ef6c00";
    }
    else{
      return pressed ? "#ef6c00" : "white";
    }
  } 

  return (
    <Pressable
      style={({ pressed }) => [
        {
          backgroundColor: getBackgroundColor(pressed)
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

