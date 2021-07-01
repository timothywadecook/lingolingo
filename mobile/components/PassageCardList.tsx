import React from "react";
import { FlatList } from "react-native";
import { PassageCard } from "./PassageCard";

const fake = [
  {
    text: "I'm gonna live where the green grass grows. Watch my corn pop up in rows.",
    language: "english",
    difficulty: 4,
    fluency: 5,
  },
  {
    text: "Hi, nice to meet you, whats your name?",
    language: "english",
    difficulty: 4,
    fluency: 5,
  },
  {
    text: "hola, mucho gusto. como te llamas?",
    language: "spanish",
    difficulty: 4,
    fluency: 5,
  },
];

export function PassageCardList() {
  return (
    <FlatList
      data={fake}
      renderItem={({ item }) => <PassageCard passage={item} />}
      keyExtractor={(item, i) => i + "change"}
    />
  );
}
