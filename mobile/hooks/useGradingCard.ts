import { useState, useContext, useEffect } from "react";
import { GraphQLResult } from "@aws-amplify/api";
import { API, graphqlOperation } from "aws-amplify";
import { createGrade as _createGrade } from "../api/graphql/mutations";
import { readingsByLanguage } from "../api/graphql/queries";
import { Grade, Reading, CreateGradeInput } from "../api/passagesApi";
import { ProfileContext } from "../App";

export function useGradingCard() {
  const { gradingLanguage } = useContext(ProfileContext);

  const [processing, setProcessing] = useState(false);
  const createGrade = async (input: CreateGradeInput) => {
    try {
      API.graphql(graphqlOperation(_createGrade, { input }));
    } catch (e) {
      console.log("Error creating grade: input: ", input, "error: ", e.message);
    } finally {
      setProcessing(false);
    }
  };

  const [reading, setReading] = useState<Reading>();
  const [loading, setLoading] = useState(false);
  const getOneReading = async () => {
    if (!loading) {
      setLoading(true);
      try {
        const x = (await API.graphql(
          graphqlOperation(readingsByLanguage, {
            language: gradingLanguage,
            limit: 1,
          })
        )) as GraphQLResult<Grade[]>;

        setReading(x?.data?.gradesByReaderId?.items[0]);
      } catch (e) {
        console.log("Error loading one reading card", e.message);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    getOneReading();
  }, []);

  return {
    reading,
    createGrade,
    processing,
  };
}
