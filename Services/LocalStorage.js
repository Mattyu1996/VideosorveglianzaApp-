import AsyncStorage from "@react-native-async-storage/async-storage";

export default class LocalStorage {
  async saveToken(token) {
    try {
      await AsyncStorage.setItem("JWT_TOKEN", token);
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  }

  async getToken() {
    try {
      return await AsyncStorage.getItem("JWT_TOKEN");
    } catch (error) {
      console.log("AsyncStorage Error: " + error.message);
    }
  }
}
