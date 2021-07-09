import React, { useState } from "react";
import { Card, Text, View, Slider, Button, Colors } from "react-native-ui-lib";
import { Feather } from "@expo/vector-icons";
import { useGradingCard } from "../hooks/useGradingCard";
import { CreateGradeInput } from "../api/passagesApi";
import { useContext } from "react";
import { ProfileContext } from "../App";

type Props = {
  onSubmit: () => void;
};

export function GradingCard({ onSubmit }: Props) {
  // grading state
  const [understandable, setUnderstandable] = useState(1);
  const [soundsNative, setSoundsNative] = useState(1);

  // user
  const { userId } = useContext(ProfileContext);

  // this reading
  const { reading, createGrade: _createGrade, processing } = useGradingCard();

  const createGrade = () => {
    const input: CreateGradeInput = {
      readingId: reading.id,
      readerId: reading.readerId,
      graderId: userId,
      soundsNative,
      understandable,
    };
    _createGrade(input);
    onSubmit();
  };

  const playRecording = () => {};

  return (
    <Card flex padding-34>
      <Text marginB-12 heading>
        {reading?.text}
      </Text>
      <View marginV-24 row spread centerV>
        <Text body>{reading?.difficulty}</Text>
        <Button
          padding-5
          enableShadow
          backgroundColor={Colors.primary}
          iconSource={() => (
            <Feather name="play-circle" size={50} color={"white"} />
          )}
        />

        <Text body>{reading?.language}</Text>
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

      <Button
        marginT-24
        padding-5
        backgroundColor={Colors.primaryColor}
        label="Submit Grade"
      />
    </Card>
  );
}
