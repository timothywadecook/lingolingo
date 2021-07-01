import React, { useState } from "react";
import { TextField, Button, Card } from "react-native-ui-lib";

const MAX_LENGTH = 140;

export function NewPassageForm() {
  const [input, setInput] = useState("");
  const error = input.length > 80 ? "Max length 140" : null;

  const createPassage = () => console.log("aws api");

  return (
    <Card padding-24 margin-6>
      <TextField
        title="New Passage"
        enableErrors
        error={error}
        value={input}
        onChangeText={(text: string) => setInput(text)}
      />
      <Button disabled={!!error} label="Submit" onPress={createPassage} />
    </Card>
  );
}
