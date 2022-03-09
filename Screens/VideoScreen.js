import {
  FlatList,
  View,
  StyleSheet,
  Modal,
  Text,
  Pressable,
  RefreshControl,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import VideoItem from "../Components/VideoItem";
import { FAB } from "react-native-elements";
export default function VideoScreen() {
  let modalVisible = false;

  const showModal = () => {
    console.log("search");
    modalVisible = !modalVisible;
  };

  return (
    <LinearGradient colors={["#f5f5f5", "#f5f5f5"]} style={styles.gradient}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello World!</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <FlatList
        style={styles.list}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingBottom: 30,
        }}
        data={[
          {
            data: "08/03/2023",
            orario: "18:00 - 19:00",
            dimensione: "1,1 Gb",
          },
          {
            data: "08/03/2023",
            orario: "18:00 - 19:00",
            dimensione: "1,1 Gb",
          },
          {
            data: "08/03/2023",
            orario: "18:00 - 19:00",
            dimensione: "1,1 Gb",
          },
          {
            data: "08/03/2023",
            orario: "18:00 - 19:00",
            dimensione: "1,1 Gb",
          },
          {
            data: "08/03/2023",
            orario: "18:00 - 19:00",
            dimensione: "1,1 Gb",
          },
          {
            data: "08/03/2023",
            orario: "18:00 - 19:00",
            dimensione: "1,1 Gb",
          },
        ]}
        renderItem={({ item }) => <VideoItem videoInfo={item} />}
      />
      <FAB
        style={{ marginBottom: 50 }}
        visible={true}
        icon={{ name: "search", color: "white" }}
        color="#ef6c00"
        placement="right"
        onPress={showModal}
      />
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
  list: {
    width: "100%",
    paddingVertical: 15,
  },
  modalContainer: {
    backgroundColor: "white",
    width: "80%",
    height: "80%",
    alignSelf: "center",
    marginBottom: "20%",
    marginTop: "30%",
    borderRadius: 20,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
