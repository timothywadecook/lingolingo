import React, { useContext, useState } from "react";
import { View, Button, Colors, Text } from "react-native-ui-lib";
import { ProfileContext } from "../../App";
import { MaterialIcons } from "@expo/vector-icons";
import { SquareNumberWithSubtitle } from "../../components/SquareNumberWithSubtitle";
import { ReadingCard } from "../../components/ReadingCard";
import { GradingCard } from "../../components/GradingCard";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function Home() {
  const {
    gradingLanguage,
    readingLanguage,
    difficulty,
    grades,
    readings,
    avgUnderstandable,
    avgSoundsNative,
    readingCount,
  } = useContext(ProfileContext);

  const onChangeGradingLanguage = () => null;
  const onChangeDifficulty = () => null;

  const COST_OF_READING = 0;
  const [counter, setCounter] = useState(COST_OF_READING);
  const showReadingCard = counter < 1;
  const onSubmitReading = () => setCounter(COST_OF_READING);
  const onSubmitGrade = () => setCounter(counter - 1);
  const onSubmit = showReadingCard ? onSubmitReading : onSubmitGrade;
  const CardComponent = showReadingCard ? ReadingCard : GradingCard;

  // style
  const insets = useSafeAreaInsets();

  return (
    <View flex padding-24 style={{ paddingTop: insets.top }}>
      <View row spread centerV paddingV-12 paddingH-24>
        <SquareNumberWithSubtitle
          number={avgUnderstandable}
          subtitle="understandable"
        />
        <SquareNumberWithSubtitle
          featured
          number={readingCount}
          subtitle="readings"
        />
        <SquareNumberWithSubtitle
          number={avgSoundsNative}
          subtitle="sounds native"
        />
      </View>

      <View row paddingV-24>
        <View flex>
          <Text subheading>
            {showReadingCard ? "Reading" : "Grading"}{" "}
            <Text primary subheading onPress={onChangeGradingLanguage}>
              {showReadingCard
                ? capitalizeFirstLetter(readingLanguage)
                : capitalizeFirstLetter(gradingLanguage)}
            </Text>
          </Text>

          {/* <Text body onPress={onChangeDifficulty}>
            {difficulty}
          </Text> */}
        </View>

        <View paddingR-12 centerV>
          <MaterialIcons name="settings" size={22} color={Colors.grey40} />
        </View>
      </View>

      <View flex>
        <CardComponent onSubmit={onSubmit} />
      </View>
    </View>
  );
}

function capitalizeFirstLetter(string: string | null | undefined) {
  if (!string) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
