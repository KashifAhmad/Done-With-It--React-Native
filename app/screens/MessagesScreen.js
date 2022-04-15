import React from "react";
import {
  View,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
} from "react-native";
import AppListItem from "../componenets/AppListItem";
import Constants from "expo-constants";

import colors from "../config/colors";
import AppListItemSeparator from "../componenets/AppListItemSeparator";
import { useState } from "react/cjs/react.production.min";
import ListItemDeleteAction from "../componenets/ListItemDeleteAction";

const initialMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/chair.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/jacket.jpeg"),
  },
];
function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages)
    const [refreshing, setRefreshing] = useState(false)
    const handleDelete = (message) => {
        setMessages(messages.filter((m) => m.id !== message.id))

    }
  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <AppListItem
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Item pressed", item)}
            renderRightActions={() => (
                <ListItemDeleteAction onPress={() => handleDelete(item)} />
              )}
          />
        )}
        ItemSeparatorComponent={AppListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
            setMessages([
              {
                id: 2,
                title: "T2",
                description: "D2",
                image: require("../assets/chair.jpg"),
              },
            ]);
          }}
          />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.StatusBarHeight,
  },
});

export default MessagesScreen;
