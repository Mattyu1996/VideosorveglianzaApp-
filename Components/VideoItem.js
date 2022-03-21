import { Component } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";
export default class VideoItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.state = {
      thumb: {
        uri: this.props.videoInfo.thumb,
      },
    };
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.videoInfo !== this.props.videoInfo;
  }

  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.thumbnail} source={this.state.thumb} />
        <View style={styles.rightContainer}>
          <Text style={styles.heading}>{this.props.videoInfo.time}</Text>
          <Text style={styles.paragraph}>{this.props.videoInfo.date}</Text>
          <Text style={styles.paragraph}>{this.props.videoInfo.size}</Text>
          <View style={styles.buttonContainer}>
            <IconButton
              size={40}
              name="play"
              onPress={() => {
                this.props.onPlay(this.props.videoInfo);
              }}
            ></IconButton>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 170,
    width: "100%",
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "flex-start",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#f5f5f5",
  },
  thumbnail: {
    marginLeft: 20,
    backgroundColor: "gray",
    width: 200,
    height: 120,
    borderRadius: 20,
  },
  rightContainer: {
    width: "100%",
    height: "100%",
    padding: 20,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#a4a4a4",
  },
  paragraph: {
    fontSize: 16,
    color: "#a4a4a4",
    marginVertical: 2,
  },
  buttonContainer: {
    marginTop: 10,
    width: 120,
    height: "100%",
    paddingRight: 10,
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
});
