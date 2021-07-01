import React from "react";
import { Button, Colors } from "react-native-ui-lib";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";

export function BackButton() {
  const navigation = useNavigation();
  const goBack = () => navigation.goBack();

  return (
    <Button
      onPress={goBack}
      label="Back"
      link
      iconSource={() => (
        <Ionicons name="chevron-back" color={Colors.primary} size={26} />
      )}
    />
  );
}
