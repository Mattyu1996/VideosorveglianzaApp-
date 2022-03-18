import * as FileSystem from "expo-file-system";
import { LinearGradient } from "expo-linear-gradient";
import { Component } from "react";
import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-elements";
import { connect } from "react-redux";
import CameraItem from "../Components/CameraItem";
import PrimaryButton from "../Components/PrimaryButton";
import VideoItem from "../Components/VideoItem";

class VideoScreen extends Component {
  constructor(props, { navigation }) {
    super(props);
    this.navigation = navigation;
    this.props = props;
  }

  state = {
    modalVisible: false,
    action: null,
    selectedVideo: null,
  };

  selectCamera = (cameraId) => {
    if (this.state.action != null && this.state.selectedVideo != null) {
      if (this.state.action == "play") {
        this.props.playVideo(
          `https://vsserver.ccml.it/video/${cameraId}/${this.state.selectedVideo.date}/${this.state.selectedVideo.file}`
        );
      } else if (this.state.action == "download") {
        this.downloadVideo(
          this.state.selectedVideo.file,
          `https://vsserver.ccml.it/video/${cameraId}/${this.state.selectedVideo.date}/${this.state.selectedVideo.file}?download=true`
        );
      }
    }
    this.closeModal();
  };

  async downloadVideo(filename, fileUrl) {
    let fileUri = `${FileSystem.documentDirectory}${filename}`;
    FileSystem.FileSystemDownloadResult = await FileSystem.downloadAsync(
      fileUrl,
      fileUri
    );
  }

  search = () => {
    console.log("search");
  };

  onPlay(selectedVideo) {
    //console.log(selectedVideo);
    this.setState({ selectedVideo: selectedVideo });
    this.setState({ action: "play" });
    this.openModal();
  }

  onDownload(selectedVideo) {
    console.log(selectedVideo);
    this.setState({ selectedVideo: selectedVideo, action: "download" });
    this.openModal();
  }

  openModal = () => {
    console.log("openModal");
    this.setState({ modalVisible: true });
  };

  closeModal = () => {
    console.log("closeModal");
    this.setState({ modalVisible: false });
  };

  render() {
    return (
      <LinearGradient colors={["#f5f5f5", "#f5f5f5"]} style={styles.gradient}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            console.log("Modal has been closed.");
          }}
        >
          <View style={styles.modalContainer}>
            <Text style={styles.modalHeading}>Seleziona la Camera</Text>
            <CameraItem
              title="Camera 1"
              onPress={() => this.selectCamera(1)}
              first={true}
            ></CameraItem>
            <CameraItem
              title="Camera 2"
              onPress={() => this.selectCamera(2)}
            ></CameraItem>
            <CameraItem
              title="Camera 3"
              onPress={() => this.selectCamera(3)}
            ></CameraItem>
            <CameraItem
              title="Camera 4"
              onPress={() => this.selectCamera(4)}
            ></CameraItem>
            <PrimaryButton
              style={{ marginTop: 20 }}
              title="Indietro"
              onPress={() => this.closeModal()}
              accessibilityLabel="Indietro"
            ></PrimaryButton>
          </View>
        </Modal>

        {this.props.videos != null && this.props.videos.length > 0 ? (
          <FlatList
            style={styles.list}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 30,
            }}
            data={this.props.videos}
            renderItem={({ item }) => (
              <VideoItem
                videoInfo={item}
                onPlay={this.onPlay.bind(this)}
                onDownload={this.onDownload.bind(this)}
              />
            )}
          />
        ) : (
          <Text style={{ fontSize: 20 }}>Nessun video disponibile</Text>
        )}
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

const mapStateToProps = (state) => {
  return {
    videos: state.videosReducer.videos,
  };
};

export default connect(mapStateToProps)(VideoScreen);
