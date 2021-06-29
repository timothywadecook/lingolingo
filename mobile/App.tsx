import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
//
// AWS Amplify Config
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";

import Amplify from "@aws-amplify/core";
import config from "./aws-exports";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

function App() {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40, fontWeight: "500" }}>LingoLingo</Text>
      <Text>Eliminate your accent for free</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
