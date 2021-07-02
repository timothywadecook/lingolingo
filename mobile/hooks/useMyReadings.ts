import { useEffect, useState } from "react";
import { GraphQLResult } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import { createReading as createReadingGql } from "../api/graphql/mutations";
import { readingsByReaderId } from "../api/graphql/queries";
import { Reading, CreateReadingInput } from "../api/passagesApi";
import { useUser } from "./useUser";

export function useMyReadings() {
  // user
  const { id: userId } = useUser();

  // state
  const [readings, setReadings] = useState([]);
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
          readerId: userId,
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
  }, [userId]);

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
