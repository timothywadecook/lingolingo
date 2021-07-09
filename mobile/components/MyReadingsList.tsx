import React from "react";
import { FlatList } from "react-native";
import { useMyReadings } from "../hooks/useMyReadings";
import { ReadingCard } from "./ReadingCard";

export function ReadingCardList() {
  const { readings, refresh, refreshing } = useMyReadings();

  return (
    <FlatList
      onRefresh={refresh}
      refreshing={refreshing}
      data={readings}
      renderItem={({ item }) => <ReadingCard reading={item} />}
      keyExtractor={(item, i) => i + "change"}
    />
  );
}
