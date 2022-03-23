import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Component } from "react";
import { FlatList, StyleSheet, View, Text } from "react-native";
import { FAB } from "react-native-elements";
import { connect } from "react-redux";
import CameraCard from "../Components/CameraCard";
import videosApiCall from "../Redux/Actions/videoActionCreator";
import camerasApiCall from "../Redux/Actions/cameraActionCreator";
import PrimaryButton from "../Components/PrimaryButton";

class LiveScreen extends Component {
  constructor(props) {
    super(props);
  }


  state = {
    cameras: [],
  };

  refresh(){
    this.props.dispatch(videosApiCall());
    this.props.dispatch(camerasApiCall());
  }

  render() {
    return (
      <LinearGradient colors={["#da8f52", "#ef6c00"]} style={styles.gradient}>

        {this.props.cameras != null && this.props.cameras.length > 0 ? (
          <FlatList
          style={styles.list}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 40,
          }}
          data={this.props.cameras}
          renderItem={({ item }) => (
            <CameraCard
              title={"Camera " + item.id}
              thumbnail={item.thumb}
              onPlay={() => {
                this.props.showOneCamera(item.url);
              }}
            ></CameraCard>
          )}
        />
        ) : (
          <View style={{alignItems: "center", justifyContent: "center", width: "100%"}}>
            <Text style={{ fontSize: 20, color:"white" }}>Nessuna camera disponibile</Text>
            <PrimaryButton
                style={{ marginTop: 20 }}
                title="Aggiorna"
                onPress={() => this.refresh()}
                accessibilityLabel="Aggiorna"
              ></PrimaryButton>
          </View>
        )}

        
        <FAB
          style={{ marginBottom: 50 }}
          visible={true}
          icon={{ name: "fullscreen", color: "white" }}
          color="#ef6c00"
          placement="right"
          onPress={this.props.showAllCameras}
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
    paddingVertical: 30,
  },
});

const mapStateToProps = (state) => {
  return {
    cameras: state.cameraReducer.cameras,
  };
};

const mapsDispatchToProps = (dispatch) =>{
  return {
    dispatch: dispatch
  }
}

export default connect(mapStateToProps, mapsDispatchToProps)(LiveScreen);
