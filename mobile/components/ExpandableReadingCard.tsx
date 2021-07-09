import React, { useState } from "react";
import { ExpandableSection, Text, View } from "react-native-ui-lib";
import { Reading, Grade } from "../api/passagesApi";
import { useAverageGrades } from "../hooks/useAverageGrades";
import { SquareNumberWithSubtitle } from "./SquareNumberWithSubtitle";
import { FlatList } from "react-native-gesture-handler";
import { PlayPauseButton } from "./PlayPauseButton";

type Props = {
  reading: Reading;
};

export function ExpandableReadingCard({ reading }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [playing, setPlaying] = useState(false);

  // props
  const { passage, grades: _grades, recording } = reading;
  const passageText = (passage && passage.text) || "No passage text found.";

  //averages
  const grades = (_grades || []) as Grade[];
  const { understandable, soundsNative } = useAverageGrades(grades);

  return (
    <ExpandableSection
      onPress={() => setExpanded(!expanded)}
      expanded={expanded}
      sectionHeader={
        <SectionHeader
          text={passageText}
          playing={playing}
          setPlaying={setPlaying}
          soundsNative={soundsNative}
          understandable={understandable}
        />
      }
    >
      <View padding-5>
        <HorizontalGradesList grades={grades} />
      </View>
    </ExpandableSection>
  );
}

type HorizontalGradesListProps = {
  grades: Grade[];
};
function HorizontalGradesList({ grades }: HorizontalGradesListProps) {
  const renderGrades = ({ item }: { item: Grade }) => (
    <View>
      <View row centerV>
        <SquareNumberWithSubtitle
          number={item.understandable}
          subtitle="understandable"
        />
        <SquareNumberWithSubtitle
          number={item.soundsNative}
          subtitle="sounds native"
        />
      </View>
      <Text body>{item.createdAt}</Text>
    </View>
  );

  return (
    <FlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={grades}
      renderItem={renderGrades}
    />
  );
}

type SectionHeaderProps = {
  text: string;
  setPlaying: (playing: boolean) => void;
  playing: boolean;
  understandable: number;
  soundsNative: number;
};

function SectionHeader({
  text,
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
      <Text subheading>{text}</Text>;
    </View>
  );
}
