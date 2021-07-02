import { useEffect, useState } from "react";

export function useReadingsGradedByMe() {
  // listReadingsByGrader

  const readingsGradedByMe = [] as object[];

  return {
    readingsGradedByMe,
  };
}
