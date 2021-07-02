import React, { useEffect } from "react";
import { View, Text, Button } from "react-native-ui-lib";
import { NewPassageForm } from "../components/NewPassageForm";
import { PassageCardList } from "../components/PassageCardList";

export function AddPassagesScreen({ navigation }) {
  return (
    <View flex>
      <Text heading>Grading Reading Points</Text>
      <NewPassageForm />
      <PassageCardList />
    </View>
  );
}
