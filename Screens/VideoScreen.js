import { LinearGradient } from "expo-linear-gradient";
import { Component } from "react";
import { FlatList, Modal, StyleSheet, Text, View } from "react-native";
import { FAB } from "react-native-elements";
import { connect } from "react-redux";
import CameraItem from "../Components/CameraItem";
import PrimaryButton from "../Components/PrimaryButton";
import VideoItem from "../Components/VideoItem";
import DatePicker from "react-native-date-picker";
import videosApiCall from "../Redux/Actions/videoActionCreator";

class VideoScreen extends Component {
  constructor(props, { navigation }) {
    super(props);
    this.navigation = navigation;
    this.props = props;
  }

  state = {
    cameraModalVisible: false,
    searchModalVisible: false,
    selectedVideo: null,
    selectedDate: new Date(),
  };

  selectCamera = (cameraId) => {
    if (this.state.selectedVideo != null) {
      this.props.playVideo(
        `https://vsserver.ccml.it/video/${cameraId}/${this.state.selectedVideo.date}/${this.state.selectedVideo.file}`
      );
    }
    this.closeCameraModal();
  };

  search = () => {
    console.log("search");
  };

  onPlay(selectedVideo) {
    this.setState({ selectedVideo: selectedVideo });
    this.openCameraModal();
  }

  openCameraModal = () => {
    this.setState({ cameraModalVisible: true });
  };

  closeCameraModal = () => {
    this.setState({ cameraModalVisible: false.valueOf, selectedVideo: null });
  };

  openSearchModal = () => {
    this.setState({ searchModalVisible: true });
  };

  closeSearchModal = () => {
    this.setState({ searchModalVisible: false, selectedDate: new Date() });
  };

  getVideosByDate = (date) =>{
    this.closeSearchModal();
    this.props.dispatch(videosApiCall(date));
  }

  refresh = ()=>{
    this.props.dispatch(videosApiCall());
  }

  render() {
    return (
      <LinearGradient colors={["#f5f5f5", "#f5f5f5"]} style={styles.gradient}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.searchModalVisible}
        >
          <View style={styles.searchModalContainer}>
            <Text style={styles.modalHeading}>Seleziona la data</Text>
            <View style={{height: 180}}>
              <DatePicker
                mode="date"
                date={this.state.selectedDate}
                onDateChange={(date) => this.setState({selectedDate: new Date(date)})}
              />
              <Text style={{width: '100%', height: 60, position: 'absolute', bottom: 0, left: 0}}>{' '}</Text>
            </View>
            <View style={{flexDirection:'row', width:"90%", justifyContent:'space-between'}}>
            <PrimaryButton
              style={{ marginTop: 20 }}
              title="Conferma"
              reverse="true"
              onPress={() => this.getVideosByDate(this.state.selectedDate)}
              accessibilityLabel="Conferma"
            ></PrimaryButton>
            <PrimaryButton
              style={{ marginTop: 20 }}
              title="Indietro"
              onPress={() => this.closeSearchModal()}
              accessibilityLabel="Indietro"
            ></PrimaryButton>
            </View>
          </View>
        </Modal>

        {/* Camera Modal */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.cameraModalVisible}
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
              onPress={() => this.closeCameraModal()}
              accessibilityLabel="Indietro"
            ></PrimaryButton>
          </View>
        </Modal>
        {/* End cameras Modal */}

        {this.props.videos != null && this.props.videos.length > 0 ? (
          <FlatList
            style={styles.list}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{
              paddingBottom: 30,
            }}
            data={this.props.videos}
            renderItem={({ item }) => (
              <VideoItem videoInfo={item} onPlay={this.onPlay.bind(this)} />
            )}
          />
        ) : (
          <Text style={{ fontSize: 20 }}>Nessun video disponibile</Text>
        )}
        <FAB
          style={{ marginBottom: 120, marginRight: 23 }}
          size="small"
          visible={true}
          icon={{ name: "refresh", color: "white" }}
          color="#ef6c00"
          placement="right"
          onPress={this.refresh}
        />
        <FAB
          style={{ marginBottom: 50 }}
          visible={true}
          icon={{ name: "search", color: "white" }}
          color="#ef6c00"
          hideOnScroll={true}
          placement="right"
          onPress={this.openSearchModal}
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
  searchModalContainer: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: "10%",
    marginTop: "60%",
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

const mapsDispatchToProps = (dispatch) =>{
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapsDispatchToProps)(VideoScreen);
