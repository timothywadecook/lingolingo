import React, { useEffect, useState } from "react";
import { GraphQLResult } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import { createPassage as create } from "../api/graphql/mutations";
import { passagesByLanguageAndDifficulty } from "../api/graphql/queries";
import { Passage } from "../api/passagesApi";

export enum Languages {
  english = "english",
  spanish = "spanish",
}

export interface CreatePassage {
  text: string;
  difficulty: number;
  language: Languages;
}

export function usePassages(language = "english" as Languages, difficulty = 3) {
  const [passages, setPassages] = useState<Passage[] | []>([]);

  const createPassage = async (input: CreatePassage) =>
    await API.graphql(graphqlOperation(create, { input }));

  const [refreshing, setRefreshing] = useState(false);
  const refresh = async () => {
    if (refreshing) return;
    setRefreshing(true);

    try {
      const passagesData = (await API.graphql(
        graphqlOperation(passagesByLanguageAndDifficulty, {
          language,
          difficulty: { lt: difficulty + 1 },
        })
      )) as GraphQLResult<Passage[]>;

      console.log("passageData", passagesData);

      setPassages(
        passagesData?.data?.passagesByLanguageAndDifficulty?.items || []
      );
    } catch (e) {
      console.log("Error refreshing passages", e);
    } finally {
      setRefreshing(false);
    }
  };

  const getUngradedPassage = async () => null;

  useEffect(() => {
    refresh();
  }, [language, difficulty]);

  return {
    getUngradedPassage,
    refreshing,
    refresh,
    passages,
    createPassage,
  };
}
