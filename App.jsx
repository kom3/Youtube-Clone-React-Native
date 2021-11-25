import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import VideoList from "./components/videolist.jsx";

const youtubelogo = require("./assets/yticon.png");

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <StatusBar style="auto" />
        <View style={styles.dflex}>
          <View>
            <Image style={styles.yticon} source={youtubelogo} />
          </View>
          <View>
            <Text style={styles.title}>YouTube</Text>
          </View>
        </View>
        <View style={[styles.dflex, styles.headericgrp]}>
          <View>
            <FontAwesome5 name="chromecast" size={24} color="black" />
          </View>
          <View>
            <FontAwesome name="bell-o" size={24} color="black" />
          </View>
          <View>
            <AntDesign name="search1" size={24} color="black" />
          </View>
          <View>
            <FontAwesome name="user-circle-o" size={24} color="black" />
          </View>
        </View>
      </View>
      <VideoList />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    display: "flex",
    marginTop: 25,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
  },

  yticon: {
    height: 50,
    width: 50,
  },

  dflex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  title: {
    color: "#000000",
    fontWeight: "bold",
    fontSize: 18,
  },

  headericgrp: {
    width: 160,
    justifyContent: "space-between",
  },
});
