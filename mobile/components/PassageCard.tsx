import React from "react";
import { Card, Text, View } from "react-native-ui-lib";

type Passage = {
  text: string;
  language: string;
  difficulty: number;
  fluency: number;
};

type Props = {
  passage: Passage;
};

export function PassageCard({ passage }: Props) {
  return (
    <Card padding-24 margin-6>
      <Text marginB-12 heading>
        {passage.text}
      </Text>
      <View row spread>
        <Text body>{passage.difficulty}</Text>
        <Text body>{passage.language}</Text>
        <Text body>{passage.fluency}</Text>
      </View>
    </Card>
  );
}
