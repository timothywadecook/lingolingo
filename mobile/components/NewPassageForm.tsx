import React, { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  TextField,
  Button,
  Card,
  Slider,
  Text,
  Picker,
} from "react-native-ui-lib";
import { usePassages } from "../hooks/usePassages";
import { Languages, CreatePassage } from "../hooks/usePassages";

const MAX_LENGTH = 140;

export function NewPassageForm() {
  //state
  const [text, setText] = useState("");
  const [difficulty, setDifficulty] = useState(3);
  const [language, setLanguage] = useState(Languages.english);

  // validate input
  const error = text.length > MAX_LENGTH ? `Max length ${MAX_LENGTH}` : null;

  // actions
  const { createPassage } = usePassages();
  const clearInput = () => {
    setText("");
  };
  const onCreate = () => {
    const passage: CreatePassage = {
      text,
      difficulty,
      language,
    };
    createPassage(passage);
    clearInput();
  };

  // style
  const { top } = useSafeAreaInsets();

  return (
    <Card padding-24 margin-6>
      <TextField
        title="Enter Text"
        enableErrors
        error={error}
        value={text}
        onChangeText={setText}
      />
      <Text marginT-20>Difficulty {difficulty}</Text>
      <Slider
        value={difficulty}
        onValueChange={setDifficulty}
        minimumValue={1}
        maximumValue={10}
        step={1}
      />
      <Text marginT-20>Language</Text>
      <Picker
        topBarProps={{ title: "Lanuages", containerStyle: { marginTop: top } }}
        value={language}
        onChange={({ value }) => setLanguage(value)}
      >
        {Object.values(Languages).map((language: Languages) => (
          <Picker.Item key={language} value={language} label={language} />
        ))}
      </Picker>
      <Button
        marginT-20
        disabled={!!error || !text}
        label="Submit"
        onPress={onCreate}
      />
    </Card>
  );
}
