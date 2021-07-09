import React from "react";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Colors } from "react-native-ui-lib";
import { Home } from "./Home";
import { Recordings } from "./Recordings";
import { Grades } from "./Grades";

const Tab = createMaterialBottomTabNavigator();

export function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={Colors.primary}
      inactiveColor={Colors.grey40}
      barStyle={{ backgroundColor: "transparent" }}
      shifting
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          // tabBarLabel: "Record",
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <MaterialIcons
              // name="keyboard-voice"
              name="home"
              color={color}
              size={22}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Recordings"
        component={Recordings}
        options={{
          tabBarLabel: "Recordings",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="library-music" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="Grades"
        component={Grades}
        options={{
          tabBarLabel: "Grades",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="library-add-check" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
