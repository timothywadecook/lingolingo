import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BackButton } from "../components/BackButton";
// Screens
import { Tabs } from "../screens/bottomtabs";
import { SettingsScreen } from "../screens/SettingsScreen";

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="Tabs"
          component={Tabs}
          options={{
            headerTitle: "LingoLingo",
            title: "LingoLingo",
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerLeft: () => <BackButton /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
