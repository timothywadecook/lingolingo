import React from "react";
import { Button, Colors } from "react-native-ui-lib";
import { MaterialIcons } from "@expo/vector-icons";

type PlayPauseButtonProps = {
  size?: number;
  playing: boolean;
  setPlaying: (playing: boolean) => void;
};

export function PlayPauseButton({
  playing,
  setPlaying,
  size = 30,
}: PlayPauseButtonProps) {
  return (
    <Button
      onPress={() => setPlaying(!playing)}
      padding-5
      enableShadow
      backgroundColor={playing ? Colors.primaryColor : Colors.primary}
      iconSource={() => (
        <MaterialIcons
          name={playing ? "pause" : "record-voice-over"}
          size={size}
          color={"white"}
        />
      )}
    />
  );
}
