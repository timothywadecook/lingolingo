import React, { useState } from "react";
import { ExpandableSection, Text, View } from "react-native-ui-lib";
import { Grade } from "../api/passagesApi";
import { SquareNumberWithSubtitle } from "./SquareNumberWithSubtitle";
import { PlayPauseButton } from "./PlayPauseButton";

type Props = {
  grade: Grade;
};

export function ExpandableGradeCard({ grade }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(false);

  const { understandable, soundsNative, reading } = grade;

  const recording = (reading && reading.recording) || null;
  const text =
    (reading && reading.passage && reading.passage.text) || "No text found.";

  return (
    <ExpandableSection
      onPress={() => setExpanded(!expanded)}
      expanded={expanded}
      sectionHeader={
        <SectionHeader
          playing={playing}
          setPlaying={setPlaying}
          soundsNative={soundsNative}
          understandable={understandable}
        />
      }
    >
      <View padding-5>
        <Text subheading>{text}</Text>;
      </View>
    </ExpandableSection>
  );
}

type SectionHeaderProps = {
  setPlaying: (playing: boolean) => void;
  playing: boolean;
  understandable: number;
  soundsNative: number;
};

function SectionHeader({
  playing,
  setPlaying,
  understandable,
  soundsNative,
}: SectionHeaderProps) {
  return (
    <View padding-5>
      <View paddingV-10 row centerV>
        <SquareNumberWithSubtitle
          number={understandable}
          subtitle="avg understandable"
        />
        <SquareNumberWithSubtitle
          number={soundsNative}
          subtitle="avg sounds native"
        />

        <PlayPauseButton playing={playing} setPlaying={setPlaying} />
      </View>
    </View>
  );
}
