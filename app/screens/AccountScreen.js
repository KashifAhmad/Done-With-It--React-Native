import React from "react";
import AppListItem from "../components/lists/AppListItem";
import Screen from "../components/Screen";
import { StyleSheet, View, FlatList } from "react-native";

import colors from "../config/colors";
import AppIcon from "../components/AppIcon";

import AppListItemSeparator from "../components/lists/AppListItemSeparator";
const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: colors.secondary,
    },
  },
];
function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View styles={styles.container}>
        <AppListItem
          title={"Kashif Ahmad"}
          subtitle="programmingwithkashif@gmail.com"
          image={require("../assets/jacket.jpg")}
        />
      </View>
      <View style={styles.container} />
      <View styles={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={AppListItemSeparator}
          renderItem={({ item }) => (
            <AppListItem
              title={item.title}
              IconComponent={
                <AppIcon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                ></AppIcon>
              }
            />
          )}
        />
      </View>
      <View style={styles.container} />
      <AppListItem
        title={"Log Out"}
        IconComponent={
          <AppIcon name={"logout"} backgroundColor={"#adadad"}></AppIcon>
        }
      />
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  screen: {
    marginTop: 20,
    backgroundColor: colors.light,
  },
});

export default AccountScreen;
