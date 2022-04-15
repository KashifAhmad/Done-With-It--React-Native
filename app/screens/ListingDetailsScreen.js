import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../componenets/AppText";
import colors from "../config/colors";
import AppListItem from "../componenets/AppListItem";
function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpeg")}
      ></Image>
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Blue Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
        <AppListItem
          image={require("../assets/jacket.jpeg")}
          title="Blue Jacket"
          subtitle="5 Listings"
        ></AppListItem>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  detailContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer:{
    marginVertical:40,
  }
});

export default ListingDetailsScreen;
