import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  TouchableHighlighty,
  TouchableNativeFeedback
} from "react-native";
import { Avatar } from "react-native-elements";

const video_list = [
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
];

export default function VideoList() {
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 94 }}>
      {video_list.map((vid, idx) => {
        return (
          <View style={styles.videolist} key={idx}>
            <TouchableNativeFeedback>
              <View style={styles.videothumb}>
                <Image
                  style={styles.videothumimg}
                  resizeMode="cover"
                  source={require("../assets/ytvideothub.jpeg")}
                />
              </View>
            </TouchableNativeFeedback>
            <View style={styles.videotitle}>
              <Avatar
                overlayContainerStyle={{ backgroundColor: "blue" }}
                rounded
                title="MD"
              />
              <View style={styles.twolinetitletext}>
                <Text style={styles.videotitletext}>
                  This is video {idx + 1}
                </Text>
                <Text style={styles.videotitlesubtext}>
                  &diams; Tech tutorials &diams;
                </Text>
              </View>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  videolist: {
    display: "flex",
    margin: 1,
  },

  videothumb: {
    backgroundColor: "black",
    height: 200,
  },

  twolinetitletext: {
    display: "flex",
    marginLeft: 8,
  },

  videothumimg: {
    flex: 1,
    width: null,
    height: null,
  },

  videotitle: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 65,
  },

  videotitletext: {
    fontSize: 18,
    fontWeight: "bold",
  },

  videotitlesubtext: {
    fontSize: 12,
  },
});
