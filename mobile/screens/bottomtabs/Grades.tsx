import React, { useContext } from "react";
import { FlatList } from "react-native-gesture-handler";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View, Text } from "react-native-ui-lib";
import { Grade } from "../../api/passagesApi";
import { ProfileContext } from "../../App";
import { ExpandableGradeCard } from "../../components/ExpandableGradeCard";

export function Grades() {
  const { grades: _grades } = useContext(ProfileContext);
  const grades = ((_grades && _grades.items) || []) as Grade[];

  // style
  const insets = useSafeAreaInsets();

  return (
    <View flex padding-24 style={{ paddingTop: insets.top }}>
      <Text marginV-24 heading>
        Grades
      </Text>

      <FlatList
        data={grades}
        renderItem={({ item }) => <ExpandableGradeCard grade={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
