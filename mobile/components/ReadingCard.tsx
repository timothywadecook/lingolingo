import React, { useState } from "react";
import { ScrollView } from "react-native";
import * as FileSystem from "expo-file-system";
import { Card, Text, View, Button, Colors } from "react-native-ui-lib";
import { MaterialIcons } from "@expo/vector-icons";
import { Audio, AVPlaybackStatus } from "expo-av";
import { useReadingCard } from "../hooks/useReadingCard";

type Props = {
  onSubmit: () => void;
};

export function ReadingCard({ onSubmit }: Props) {
  const [status, setStatus] = useState<Audio.RecordingStatus>();
  const [recording, setRecording] = useState<Audio.Recording>();
  const [uri, setUri] = useState("");
  const { text, createReading, processing } = useReadingCard();

  async function startRecording() {
    try {
      console.log("Requesting permissions..");

      await Audio.requestPermissionsAsync();

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      // const {
      //   recording: recordingObject,
      //   status,
      // } = await Audio.Recording.createAsync(Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY);

      const rec = new Audio.Recording();

      await rec.prepareToRecordAsync(
        Audio.RECORDING_OPTIONS_PRESET_HIGH_QUALITY
      );
      rec.setOnRecordingStatusUpdate(setStatus);
      await rec.startAsync();

      console.log("Starting recording..");
      setRecording(rec);
      console.log("Recording started");
    } catch (err) {
      console.error("Failed to start recording", err);
    }
  }

  async function stopRecording() {
    console.log("Stopping recording..");
    await recording?.stopAndUnloadAsync();
    const uri = recording?.getURI();
    setUri(uri || "");
    console.log("Recording stopped and stored at", uri);
  }

  // Play
  const [sound, setSound] = useState<Audio.Sound>();
  const [soundStatus, setSoundStatus] = useState<AVPlaybackStatus>();

  async function playSound() {
    const info = await FileSystem.getInfoAsync(uri);

    console.log(`FILE INFO: ${JSON.stringify(info)}`);
    console.log("recording =", recording);

    await Audio.setAudioModeAsync({
      allowsRecordingIOS: false,
      interruptionModeIOS: Audio.INTERRUPTION_MODE_IOS_DO_NOT_MIX,
      playsInSilentModeIOS: true,
      shouldDuckAndroid: true,
      interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
      playThroughEarpieceAndroid: false,
      staysActiveInBackground: true,
    });

    if (recording) {
      const { sound, status } = await recording.createNewLoadedSoundAsync(
        {
          isLooping: true,
        },
        setSoundStatus
      );

      setSound(sound);

      console.log("Playing Sound");
      await sound.playAsync();
    }
  }

  async function stopSound() {
    if (sound) {
      await sound.unloadAsync();
      sound.setOnPlaybackStatusUpdate(null);
      setSound(undefined);
    }
  }

  const playing = soundStatus && soundStatus.isLoaded && soundStatus.isPlaying;
  return (
    <Card flex padding-34>
      <ScrollView>
        <Text marginB-12 heading>
          {text}
        </Text>
      </ScrollView>
      <View marginT-12 flex bottom centerH>
        {status && status.isDoneRecording ? (
          <Button
            padding-12
            margin-12
            onPress={playing ? stopSound : playSound}
            backgroundColor={Colors.primaryColor}
            enableShadow
            // label={playing ? "Stop" : "Listen"}
            iconSource={() => (
              <MaterialIcons
                color={Colors.white}
                size={30}
                name={playing ? "stop" : "play-arrow"}
              />
            )}
          />
        ) : null}
        <Button
          onPress={
            status && status.isRecording ? stopRecording : startRecording
          }
          link
          linkColor={Colors.primary}
          padding-5
          enableShadow
          backgroundColor={Colors.primary}
          label={status && status.isRecording ? "Stop" : "Start Recording"}
          iconSource={() => (
            <MaterialIcons
              style={{ paddingRight: 7 }}
              name={
                status && status.isRecording
                  ? "fiber-manual-record"
                  : "keyboard-voice"
              }
              size={22}
              color={Colors.primary}
            />
          )}
        />
      </View>
    </Card>
  );
}
