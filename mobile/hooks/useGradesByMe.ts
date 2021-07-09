import { useEffect, useState, useContext } from "react";
import { GraphQLResult } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import { gradesByGraderId, readingsByReaderId } from "../api/graphql/queries";
import { Grade } from "../api/passagesApi";
import { UserContext } from "../App";

export function useGradesByMe() {
  // user
  const [{ id: graderId }] = useContext(UserContext);

  // state
  const [grades, setGrades] = useState<Grade[]>([]);

  // refreshing
  const [refreshing, setRefreshing] = useState(false);

  // refresh
  const refresh = async () => {
    // debounce
    if (refreshing) return;

    setRefreshing(true);

    try {
      const x = (await API.graphql(
        graphqlOperation(gradesByGraderId, {
          graderId,
        })
      )) as GraphQLResult<Grade[]>;

      setGrades(x?.data?.gradesByGraderId?.items || []);
    } catch (e) {
      console.log("Error refreshing grades", e);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    refresh();
  }, [graderId]);

  return {
    readingIds: extractReadingIds(grades),
    grades,
    refresh,
    refreshing,
  };
}

const extractReadingIds = (grades: Grade[]) => {
  return grades.map(({ reading }) => (reading && reading.id) || 0);
};
