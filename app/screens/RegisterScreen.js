import React from "react";

import { StyleSheet, Image } from "react-native";
import Screen from "../components/Screen";
import * as Yup from "yup";
import { AppForm, AppFormField, SubmitButton } from "../components/forms";
const validationSchema = Yup.object().shape({
  name: Yup.string().required().min(1).label("Name"),
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(4).label("Password"),
});
function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
          <Image source={require("../assets/logo-red.png")} style={styles.logo} />
          <AppForm>
          <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="account"
              keyboardType="text"
              placeholder="Name"
              name="name"
              textContentType="emailAddress"
            />
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              placeholder="Email"
              name="email"
              textContentType="emailAddress"
            />
    
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />
    
            <SubmitButton title="Register" />
          </AppForm>
        </Screen>
      );
}
const styles = StyleSheet.create({
    container: {
      padding: 16,
    },
    logo: {
      width: 80,
      height: 80,
      alignSelf: "center",
      marginTop: 50,
      marginBottom: 20,
    },
  });
export default RegisterScreen;
