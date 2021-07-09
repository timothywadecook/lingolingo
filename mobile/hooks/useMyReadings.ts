import { useEffect, useState, useContext } from "react";
import { GraphQLResult } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import { createReading as createReadingGql } from "../api/graphql/mutations";
import { readingsByReaderId } from "../api/graphql/queries";
import { Reading, CreateReadingInput } from "../api/passagesApi";
import { UserContext } from "../App";

export function useMyReadings() {
  // user
  const [{ id: readerId }] = useContext(UserContext);

  // state
  const [readings, setReadings] = useState<Reading[]>([]);
  // listReadingsByReader

  // refreshing
  const [refreshing, setRefreshing] = useState(false);

  // refresh
  const refresh = async () => {
    // debounce
    if (refreshing) return;

    setRefreshing(true);

    try {
      const x = (await API.graphql(
        graphqlOperation(readingsByReaderId, {
          readerId,
        })
      )) as GraphQLResult<Reading[]>;

      setReadings(x?.data?.readingsByReaderId?.items || []);
    } catch (e) {
      console.log("Error refreshing readings", e);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    refresh();
  }, [readerId]);

  // create reading
  const createReading = async (input: CreateReadingInput) =>
    API.graphql(graphqlOperation(createReadingGql, { input }));

  return {
    readings,
    refresh,
    refreshing,
    createReading,
  };
}
