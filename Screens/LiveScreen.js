import { LinearGradient } from "expo-linear-gradient";
import * as React from "react";
import { Component } from "react";
import { FlatList, StyleSheet } from "react-native";
import { FAB } from "react-native-elements";
import { connect } from "react-redux";
import CameraCard from "../Components/CameraCard";

class LiveScreen extends Component {
  constructor(props) {
    super(props);
  }

  state = {
    cameras: [],
  };

  render() {
    return (
      <LinearGradient colors={["#da8f52", "#ef6c00"]} style={styles.gradient}>
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

export default connect(mapStateToProps)(LiveScreen);
