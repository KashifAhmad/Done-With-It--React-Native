import React from "react";
import { Text, } from "react-native";



function AppText({ children, style, ...rest }) {
  return <Text style={[style, ]}{...rest}>{children}</Text>;
}

export default AppText;
