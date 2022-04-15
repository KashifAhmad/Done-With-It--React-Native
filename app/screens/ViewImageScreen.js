import React from "react";

import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import colors from "../config/colors";
import { MaterialCommunityIcons } from "@expo/vector-icons";
function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon} onPress={console.log("close")}>
        <MaterialCommunityIcons name="close" size={30} color={colors.white} />
      </View>
      <View style={styles.deleteIcon}>
        <MaterialCommunityIcons
          name="trash-can-outline"
          size={30}
          color={colors.white}
        />
      </View>

      <Image
        resizeMode="contain"
        source={require("../assets/chair.jpg")}
        style={styles.image}
      ></Image>
    </View>
  );
}
const styles = StyleSheet.create({
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
export default ViewImageScreen;
