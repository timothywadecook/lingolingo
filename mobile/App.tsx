import { StatusBar } from "expo-status-bar";
import React, { useState, Dispatch, SetStateAction } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";
import { View } from "react-native-ui-lib";
import { RootStack } from "./navigation/RootStack";
import "./constants/uilibrary.config";
//
// AWS Amplify Config
// @ts-ignore
import { withAuthenticator } from "aws-amplify-react-native";

import Amplify from "@aws-amplify/core";
import config from "./aws-exports";
import { Languages } from "./hooks/usePassages";
Amplify.configure({
  ...config,
  Analytics: {
    disabled: true,
  },
});

// context
type LanguageContext = [Languages, Dispatch<SetStateAction<Languages>>] | null;
export const GradingLanguage = React.createContext<LanguageContext>(null);
export const ReadingLanguage = React.createContext<LanguageContext>(null);

function App() {
  const grading = useState(Languages.english);
  const reading = useState(Languages.spanish);

  return (
    <GradingLanguage.Provider value={grading}>
      <ReadingLanguage.Provider value={reading}>
        <View style={styles.container}>
          <SafeAreaProvider>
            <StatusBar style="auto" />
            <RootStack />
          </SafeAreaProvider>
        </View>
      </ReadingLanguage.Provider>
    </GradingLanguage.Provider>
  );
}

export default withAuthenticator(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
