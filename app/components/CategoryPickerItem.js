import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
} from "react-native";

import AppIcon from "./AppIcon";
import AppText from "./AppText";
function CategoryPickerItem({ item, onPress }) {
  return (
    <View style={styles.container}>
      <AppIcon
        backgroundColor={item.backgroundColor}
        name={item.icon}
        size={80}
      ></AppIcon>
      <AppText style={styles.label}>{item.label}</AppText>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    alignItems: "center",
    width: "33%",
  },
  label: {
    marginTop: 5,
    textAlign: "center",
  },
});
export default CategoryPickerItem;
