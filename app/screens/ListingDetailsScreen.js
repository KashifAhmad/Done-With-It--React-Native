import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";
import AppListItem from "../components/lists/AppListItem";
function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/jacket.jpg")}
      ></Image>
      <View style={styles.detailContainer}>
        <AppText style={styles.title}>Blue Jacket for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        <View style={styles.userContainer}>
        <AppListItem
          image={require("../assets/jacket.jpg")}
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
    padding: 10,
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
