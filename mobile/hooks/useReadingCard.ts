import { useState, useContext, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { createReading as _createReading } from "../api/graphql/mutations";
import { Reading, CreateReadingInput } from "../api/passagesApi";
import { ProfileContext } from "../App";
import { Languages } from "./useProfile";
import { Difficulty } from "./useProfile";

export function useReadingCard() {
  const { readingLanguage, difficulty } = useContext(ProfileContext);

  const [processing, setProcessing] = useState(false);
  const createReading = async (input: CreateReadingInput) => {
    try {
      API.graphql(graphqlOperation(_createReading, { input }));
    } catch (e) {
      console.log(
        "Error creating reading: input: ",
        input,
        "error: ",
        e.message
      );
    } finally {
      setProcessing(false);
    }
  };

  const lang = readingLanguage as Languages;
  const diff = difficulty as Difficulty;
  const [text, setText] = useState("");
  useEffect(() => {
    setText(getTextByLanguageAndDifficulty(lang, diff));
  }, [lang, diff]);

  // GET A READING IN LANGUAGE X THAT I HAVE NOT GRADED

  return {
    text,
    createReading,
    processing,
  };
}

function getTextByLanguageAndDifficulty(
  language: Languages,
  difficulty: Difficulty
) {
  const texts = {
    [Languages.english]: [
      "Hi, my name is ______",
      "What is your favorite Netflix show right now?",
      "Who are you voting for in the upcoming election?",
      "That's a greate name, Can you please spell it out for me?",
      "Hello, nice to meet you. Are you from around here?",
    ],
    [Languages.spanish]: [
      "Hola, como estas?",
      "Buenas! Me llamo ______. Vivo en Estados Unidos. Donde eres?",
      "Hola, mucho gusto. Donde esta el bano?",
      "Donde, esta, la bibliotecha?",
      "Mi perro es muy fuerte.",
    ],
  };

  const options = texts[language];
  const third = Math.floor(options.length / 3);

  let subarr = [];
  switch (difficulty) {
    case Difficulty.easy: {
      subarr = options.slice(0, third);
      break;
    }
    case Difficulty.medium: {
      subarr = options.slice(third, third * 2);
      break;
    }
    case Difficulty.hard: {
      subarr = options.slice(third * 2, subarr.length);
      break;
    }
  }

  console.log("options", options, "third", third, difficulty, subarr);

  return subarr[Math.floor(Math.random() * subarr.length)];
}
