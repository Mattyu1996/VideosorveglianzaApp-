import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { Image, StyleSheet, Text, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import PrimaryButton from "../Components/PrimaryButton";
import authCall from "../Redux/Actions/authActionCreator";

export default function Login(props) {
  const dispatch = useDispatch();
  const [username, setUsername] = React.useState();
  const [password, setPassword] = React.useState();
  const login = () => {
    if (
      username != "" &&
      username != null &&
      password != "" &&
      password != null
    ) {
      dispatch(authCall(username, password));
    } else console.log("Inserire username e password");
  };

  return (
    <LinearGradient colors={["#ef6c00", "#da8f52"]} style={styles.gradient}>
      <StatusBar style="light" />
      <Text style={styles.heading}>Videosorveglianza</Text>
      <View style={styles.iconContainer}>
        <Image source={require("../assets/cctv.png")} style={styles.icon} />
      </View>
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          placeholder={"Username"}
          accessibilityLabel="Username"
          defaultValue={username}
          onChangeText={(input) => setUsername(input)}
        />
        <TextInput
          style={styles.input}
          placeholder={"Password"}
          accessibilityLabel="Password"
          secureTextEntry={true}
          defaultValue={password}
          onChangeText={(input) => setPassword(input)}
        />
        <PrimaryButton
          title="Accedi"
          onPress={login}
          accessibilityLabel="Accedi"
        ></PrimaryButton>
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
  iconContainer: {
    width: 150,
    height: 150,
    marginBottom: 50,
    backgroundColor: "white",
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  icon: {
    marginTop: 15,
    width: 120,
    height: 120,
  },
  inputsContainer: {
    width: "100%",
    height: 260,
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    backgroundColor: "#f5f5f5",
    width: "80%",
    padding: 15,
    borderRadius: 30,
    color: "#757575",
    shadowColor: "black",
    fontWeight: "600",
    fontSize: 20,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  heading: {
    marginBottom: 50,
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textTransform: "uppercase",
  },
});
