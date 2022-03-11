import { Image, View, StyleSheet, Text } from "react-native";
import IconButton from "./IconButton";
export default function VideoItem(props) {
    
    const { videoInfo, onPlay, onDownload } = props;
    
    return (
    <View style={styles.container}>
        <Image style={styles.thumbnail}></Image>
        <View style={styles.rightContainer}> 
            <Text style={styles.heading}>{videoInfo.data}</Text>
            <Text style={styles.paragraph}>{videoInfo.orario}</Text>
            <Text style={styles.paragraph}>{videoInfo.dimensione}</Text>
            <View style={styles.buttonContainer}>
              <IconButton size={40} name="download" onPress={onDownload}></IconButton>
              <IconButton size={40} name="play" onPress={onPlay}></IconButton>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    height: 170,
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: "flex-start", 
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5'
  },
  thumbnail: {
    marginLeft: 20,
    backgroundColor: 'gray',
    width: 150,
    height: 120,
    borderRadius: 20
  },
  rightContainer:{
    width: '100%',
    height: '100%',
    padding: 20,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#a4a4a4'
  },
  paragraph:{
    fontSize: 16,
    color: '#a4a4a4',
    marginVertical: 2
  },
  buttonContainer:{
    marginTop: 10,
    width: 120,
    height: '100%',
    paddingRight: 10,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  }

});
