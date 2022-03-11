import { FlatList, View, StyleSheet, Modal, Text, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import VideoItem from "../Components/VideoItem";
import { FAB } from "react-native-elements";
import CameraItem from "../Components/CameraItem";
import PrimaryButton from "../Components/PrimaryButton";
import { Component } from "react";

export default class VideoScreen extends Component {
  state = {
    modalVisible: false
  }

  openModal = () => {
    console.log("openModal");
    this.setState({modalVisible: true});
  };

  closeModal = () =>{
    console.log('closeModal')
    this.setState({modalVisible: false});
  }

  selectCamera = () =>{
    console.log('seleziona camera');
  };

  search = () =>{
    console.log('search');
  }

  render(){
    return (
      <LinearGradient colors={["#f5f5f5", "#f5f5f5"]} style={styles.gradient}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            this.closeModal();
          }}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeading}>Seleziona la Camera</Text>
            <CameraItem title="Camera 1" onPress={()=>this.selectCamera()} first={true}></CameraItem>
            <CameraItem title="Camera 2" onPress={()=>this.selectCamera()}></CameraItem>
            <CameraItem title="Camera 3" onPress={()=>this.selectCamera()}></CameraItem>
            <CameraItem title="Camera 4" onPress={()=>this.selectCamera()}></CameraItem>
            <PrimaryButton style={{marginTop: 20}}
            title="Indietro"
            onPress={()=>this.closeModal()}
            accessibilityLabel="Indietro"
          ></PrimaryButton>
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
          renderItem={({ item }) => <VideoItem videoInfo={item} onPlay={this.openModal} onDownload={this.openModal}  />}
        />
        <FAB
          style={{ marginBottom: 50 }}
          visible={true}
          icon={{ name: "search", color: "white" }}
          color="#ef6c00"
          placement="right"
          onPress={this.search}
        />
      </LinearGradient>
    );
  }
  
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
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "50%",
    marginTop: "50%",
    borderRadius: 20,
    paddingTop: 20,
    paddingBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalHeading: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#ef6c00",
    marginBottom: 20,
  },
  modalItem: {
    width: "100%",
    height: 70,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  modalItemIcon: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  modalItemTitle: {
    fontSize: 20,
    color: "#777777",
  },
});
