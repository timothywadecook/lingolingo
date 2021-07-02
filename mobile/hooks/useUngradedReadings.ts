import React from "react";
import { Languages } from "./usePassages";
import { useReadingsGradedByMe } from "./useReadingsGradedByMe";

export function useUngradedReadings(language = "english" as Languages) {
  // MyScores context

  const { readingsGradedByMe } = useReadingsGradedByMe();

  const idsOfReadingsGradedByMe = readingsGradedByMe.map((r) => r.id);

  // listReadingsByLanguageAndNiNIdList -> requires filter by allPost(filter: { id: { in: ["1", "2"] }})

  // update when myscores changes or force update via
}
