import React from "react";
import { FlatList } from "react-native";
import { Languages, usePassages } from "../hooks/usePassages";
import { PassageCard } from "./PassageCard";

export function PassageCardList() {
  const { passages, refresh, refreshing } = usePassages(Languages.spanish);

  return (
    <FlatList
      onRefresh={refresh}
      refreshing={refreshing}
      data={passages}
      renderItem={({ item }) => <PassageCard passage={item} />}
      keyExtractor={(item, i) => i + "change"}
    />
  );
}
