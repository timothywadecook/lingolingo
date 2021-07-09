import React from "react";
import { View, Text, Card } from "react-native-ui-lib";

type Props = {
  number: number;
  subtitle: string;
  featured?: boolean;
};

export function SquareNumberWithSubtitle({
  number,
  subtitle,
  featured = false,
}: Props) {
  if (featured)
    return (
      <Card center>
        <View padding-9 center>
          <Text primary subtext>
            {number}
          </Text>
          <Text tiny>{subtitle}</Text>
        </View>
      </Card>
    );
  return (
    <View center>
      <Text subtext>{number}</Text>
      <Text tiny>{subtitle}</Text>
    </View>
  );
}
