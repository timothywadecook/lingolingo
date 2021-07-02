import React, { useContext } from "react";
import { ScrollView } from "react-native";
import { Text } from "react-native-ui-lib";
import { Passage } from "../api/passagesApi";
import { GradingLanguage } from "../App";
import { GradingCard } from "./GradingCard";
import { usePassages } from "../hooks/usePassages";

export function GradingCardList() {
  // get an ungradedpassage (language)
  const [gradingLanguage] = useContext(GradingLanguage);

  const { passages } = usePassages(gradingLanguage); // useUngradedPassages

  return (
    <ScrollView>
      {passages.map((passage: Passage) => (
        <GradingCard passage={passage} key={passage.id} />
      ))}
    </ScrollView>
  );
}
