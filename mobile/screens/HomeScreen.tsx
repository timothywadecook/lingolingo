import React, { useEffect } from "react";
import { View, Text, Card, Button } from "react-native-ui-lib";
import { NewPassageForm } from "../components/NewPassageForm";
import { PassageCardList } from "../components/PassageCardList";

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
    <View flex>
      <NewPassageForm />
      <PassageCardList />
    </View>
  );
}
