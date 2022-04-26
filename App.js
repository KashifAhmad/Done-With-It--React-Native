import React from "react";
import AppText from "./app/components/AppText";
import Screen from "./app/components/Screen";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AuthNavigator from "./app/navigation/AuthNavigator";
import NavigationTheme from "./app/navigation/NavigationTheme";
import AppNavigator from "./app/navigation/AppNavigator";

const Link = () => {
  const navigation = useNavigation();
  return (
    <Button title="Click" onPress={() => navigation.navigate("TweetDetails")} />
  );
};
const Tweets = ({ navigation }) => (
  <Screen>
    <AppText>Tweets</AppText>
    <Button
      title="View Tweet"
      onPress={() => navigation.push("TweetDetails", { id: 100 })}
    ></Button>
  </Screen>
);
const TweetDetails = ({ route }) => (
  <Screen>
    <AppText>Tweet Details {route.params.id}</AppText>
  </Screen>
);
const Stack = createStackNavigator();
const FeedNavigator = () => (
  <Stack.Navigator
    initialRouteName="Tweets"
    screenOptions={{
      headerStyle: { backgroundColor: "dodgerblue" },
      headerTintColor: "white",
    }}
  >
    <Stack.Screen
      name="TweetDetails"
      component={TweetDetails}
      options={({ route }) => ({
        title: route.params.id,
      })}
    />
    <Stack.Screen name="Tweets" component={Tweets} options={{}} />
  </Stack.Navigator>
);
const Account = () => (
  <Screen>
    <AppText>Account</AppText>
  </Screen>
);
const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: "white",
      activeBackgroundColor: "tomato",
      inactiveBackgroundColor: "dodgerblue",
      tabBarStyle: [
        {
          display: "flex",
        },
        null,
      ],
    }}
  >
    <Tab.Screen
      name="Feed"
      component={FeedNavigator}
      options={{
        tabBarIcon: ({size, color}) => (
          <MaterialCommunityIcons name="twitter" size={size} color={color} />
        ),
      }}
    />
    <Tab.Screen
      name="Account"
      component={Account}
      options={{
        tabBarIcon: () => (
          <MaterialCommunityIcons name="account" size={30} color="white" />
        ),
      }}
    />
  </Tab.Navigator>
);
export default function App() {
  return (
    <NavigationContainer theme={NavigationTheme}>
     <AppNavigator/>
    </NavigationContainer>
  );
}
