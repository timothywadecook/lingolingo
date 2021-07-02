import React, { useEffect } from "react";
import { Button } from "react-native-ui-lib";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { PassageCardList } from "../components/PassageCardList";
import { GradingCardList } from "../components/GradingCardList";

// Grading Reading     Points

const Tab = createMaterialTopTabNavigator();

export function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          paddingR-10
          link
          label="Dashboard"
          onPress={() => navigation.navigate("Dashboard")}
        />
      ),
      headerLeft: () => (
        <Button
          paddingL-10
          link
          label="Settings"
          onPress={() => navigation.navigate("Settings")}
        />
      ),
    });
  }, []);

  return (
    <Tab.Navigator>
      <Tab.Screen name="Grading" component={GradingCardList} />
      <Tab.Screen name="Reading" component={PassageCardList} />
    </Tab.Navigator>
  );
}
