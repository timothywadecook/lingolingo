import { useState, useEffect } from "react";
import { Grade } from "../api/passagesApi";

export function useAverageGrades(grades: Grade[]) {
  // averages
  const [understandable, setUnderstandable] = useState(0);
  const [soundsNative, setSoundsNative] = useState(0);

  useEffect(() => {
    if (grades && grades.length) {
      const sums = grades.reduce(
        (sum, grade) => ({
          ...grade,
          understandable: sum.understandable + grade.understandable,
          soundsNative: sum.soundsNative + grade.soundsNative,
        }),
        { soundsNative: 0, understandable: 0 }
      );

      const avgUnderstandable = Math.round(sums.understandable / grades.length);
      const avgSoundsNative = Math.round(sums.soundsNative / grades.length);

      setUnderstandable(avgUnderstandable);
      setSoundsNative(avgSoundsNative);
    }
  }, [grades]);

  return {
    understandable,
    soundsNative,
  };
}
