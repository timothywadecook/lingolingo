import React, { useState } from "react";
import { Card, Text, View, Slider, Button, Colors } from "react-native-ui-lib";
import { Feather } from "@expo/vector-icons";
import { Passage } from "../api/passagesApi";

type Props = {
  passage: Passage;
};
export function GradingCard({ passage }: Props) {
  // state
  const [understandable, setUnderstandable] = useState(1);
  const [soundsNative, setSoundsNative] = useState(1);

  return (
    <Card flex padding-34 margin-6>
      <Text marginB-12 heading>
        {passage.text}
      </Text>
      <View marginV-24 row spread centerV>
        <Text body>{passage.difficulty}</Text>
        <Button
          padding-5
          enableShadow
          backgroundColor={Colors.primary}
          iconSource={() => (
            <Feather name="play-circle" size={50} color={"white"} />
          )}
        />

        <Text body>{passage.language}</Text>
      </View>
      <Text marginT-20>Understandable {understandable}</Text>
      <Slider
        value={understandable}
        onValueChange={setUnderstandable}
        minimumValue={1}
        maximumValue={10}
        step={1}
      />
      <Text marginT-20>Sounds Native {soundsNative}</Text>
      <Slider
        value={soundsNative}
        onValueChange={setSoundsNative}
        minimumValue={1}
        maximumValue={10}
        step={1}
      />
    </Card>
  );
}
