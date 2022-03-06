import { StatusBar } from "expo-status-bar";
import {LinearGradient} from 'expo-linear-gradient';
import {
  StyleSheet,
  Text,
  TextInput,
  Image,
  View,
  SafeAreaView,
} from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient colors={['#ef6c00', '#da8f52']} style={styles.gradient}>
        <StatusBar style="auto" />
        <Text style={styles.heading}>Videosorveglianza</Text>
        <View style={styles.iconContainer}>
          <Image source={require("../assets/cctv.png")} style={styles.icon} />
        </View>
        <View style={styles.inputsContainer}>
            <TextInput style={styles.input} placeholder={"Username"} accessibilityLabel="Username"/>
            <TextInput style={styles.input} placeholder={"Password"} accessibilityLabel="Password"/>
            <PrimaryButton title="Accedi" onPress={onPressHandler} accessibilityLabel="Accedi"></PrimaryButton>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
}

const onPressHandler = ()=>{
  console.log('fuori')
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient:{
      flex: 1,
      padding: 10,
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
  inputsContainer:{
      width: '100%',
      height: 260,
      alignItems: "center",
      justifyContent: 'space-around'
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
  heading:{
    marginBottom: 50,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.25)',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 10,
    textTransform: 'uppercase'
  }
});
