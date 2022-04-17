import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "../config/colors";
import Swipeable from "react-native-gesture-handler/Swipeable";


function AppListItem({ title, subtitle, image, onPress,IconComponent,  renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailsContainer}>
          {title && <AppText style={styles.title}>{title}</AppText>}
          {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
  </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: colors.white,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subtitle: {
    fontSize:14,
    color: colors.medium,
  },
  title: {
    
    fontWeight: "500",
  },
});

export default AppListItem;
