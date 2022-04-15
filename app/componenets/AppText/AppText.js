import React from "react";
import { Text, StyleSheet, Platform } from "react-native";
import styles from "./style";
function AppText({ children, style }) {
  return <Text style={[styles.text, style]}>{children}</Text>;
}

export default AppText;
