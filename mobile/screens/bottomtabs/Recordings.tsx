import React, { useContext } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native-ui-lib";
import { Reading } from "../../api/passagesApi";
import { ProfileContext } from "../../App";
import { ExpandableReadingCard } from "../../components/ExpandableReadingCard";

export function Recordings() {
  const { readings: _readings } = useContext(ProfileContext);
  const grades = ((_readings && _readings.items) || []) as Reading[];

  // style
  const insets = useSafeAreaInsets();

  return (
    <View flex padding-24 style={{ paddingTop: insets.top }}>
      <Text marginV-24 heading>
        Readings
      </Text>

      <FlatList
        data={grades}
        renderItem={({ item }) => <ExpandableReadingCard reading={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
