import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, Image, SafeAreaView as SafeAreaView } from 'react-native';
import Login from './Pages/Login';


export default function App() {
  return (
    <Login/>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    resizeMode: 'cover',
  }
});
