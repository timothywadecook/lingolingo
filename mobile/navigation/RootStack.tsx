import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { BackButton } from "../components/BackButton";
// Screens
import { HomeScreen } from "../screens/HomeScreen";
import { SettingsScreen } from "../screens/SettingsScreen";
import { DashboardScreen } from "../screens/DashboardScreen";
import { AddPassagesScreen } from "../screens/AddPassages";

const Stack = createStackNavigator();

export function RootStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerTitle: "LingoLingo",
            title: "Home",
          }}
        />
        <Stack.Screen
          name="Settings"
          component={SettingsScreen}
          options={{ headerLeft: () => <BackButton /> }}
        />
        {/* <Stack.Screen
          name="Dashboard"
          component={DashboardScreen}
          options={{ headerLeft: () => <BackButton /> }}
        /> */}
        <Stack.Screen
          name="Add Passages"
          component={AddPassagesScreen}
          options={{ headerLeft: () => <BackButton /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
