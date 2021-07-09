import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { RootStack } from "./navigation/RootStack";
import "./constants/uilibrary.config";
//
// AWS Amplify Config
// @ts-ignore
//
import { withAuthenticator } from "aws-amplify-react-native";
import Amplify from "@aws-amplify/core";
import config from "./aws-exports";
import {
  useProfile,
  DEFAULT_PROFILE,
  EnhancedProfile,
} from "./hooks/useProfile";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

//
// Profile Context
//
export const ProfileContext =
  React.createContext<EnhancedProfile>(DEFAULT_PROFILE);

//
// APP
//
function App() {
  const profile = useProfile();

  return (
    <ProfileContext.Provider value={profile}>
      <View style={styles.container}>
        <SafeAreaProvider>
          <StatusBar style="auto" />
          <RootStack />
        </SafeAreaProvider>
      </View>
    </ProfileContext.Provider>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
