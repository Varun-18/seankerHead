import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Navbar() {
  return (
    <View style={styles.navbar}>
      <Image
        source={require("../../assets/sneaker.png")}
        // source={{
        //   uri: "https://cdn-icons-png.flaticon.com/512/5219/5219656.png",
        // }}
        style={styles.icon}
      />
      <Text style={styles.text}>SneakerHead</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navbar: {
    width: "100%",
    backgroundColor: "black",
    color: "white",
    padding: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    // aspectRatio: 1,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});
