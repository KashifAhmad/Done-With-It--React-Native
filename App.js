import React, { useState } from "react";
import AppText from "./app/components/AppText";
import MessagesScreen from "./app/screens/MessagesScreen";
import ListEditScreen from "./app/screens/ListEditScreen";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { Button, Image } from "react-native";
import Screen from "./app/components/Screen";
import ImageInputList from "./app/components/ImageInputList";
export default function App() {
  return <ListEditScreen />;
}
