import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { StyleSheet, Text, TextInput, Image, View } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import authCall from "../Redux/Actions/authActionCreator";
import {useDispatch, useSelector} from 'react-redux';
import LocalStorage from "../Services/LocalStorage";

export default function Login({navigation}) {

  const dispatch = useDispatch();

  const localStorage = new LocalStorage();

  const login = () => {
    localStorage.getToken().then(token => {
      if(token!= ""){
        console.log('GIA AUTENTICATO', token)
        navigation.navigate('Home');
      }
      else {
        console.log('MI DEVO AUTENTICARE');
        dispatch(authCall("ADMIN", "1248"));
      }
    });
    
    //navigation.navigate('Home');
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
        />
        <TextInput
          style={styles.input}
          placeholder={"Password"}
          accessibilityLabel="Password"
          secureTextEntry={true}
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
