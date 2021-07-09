import { useEffect, useState, useContext } from "react";
import { GraphQLResult } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import { gradesByReaderId } from "../api/graphql/queries";
import { Grade } from "../api/passagesApi";
import { UserContext } from "../App";

export function useMyGrades() {
  // user
  const [{ id: readerId }] = useContext(UserContext);

  // state
  const [grades, setGrades] = useState<Grade[]>([]);
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
        graphqlOperation(gradesByReaderId, {
          readerId,
        })
      )) as GraphQLResult<Grade[]>;

      setGrades(x?.data?.gradesByReaderId?.items || []);
    } catch (e) {
      console.log("Error refreshing grades", e);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    refresh();
  }, [readerId]);

  return {
    grades,
    refresh,
    refreshing,
  };
}
