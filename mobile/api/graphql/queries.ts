/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPassage = /* GraphQL */ `
  query GetPassage($id: ID!) {
    getPassage(id: $id) {
      id
      text
      difficulty
      language
      createdAt
      updatedAt
    }
  }
`;
export const listPassages = /* GraphQL */ `
  query ListPassages(
    $filter: ModelPassageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPassages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        text
        difficulty
        language
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getReading = /* GraphQL */ `
  query GetReading($id: ID!) {
    getReading(id: $id) {
      id
      passage {
        id
        text
        difficulty
        language
        createdAt
        updatedAt
      }
      recording {
        bucket
        key
        region
      }
      language
      readerId
      grades {
        items {
          id
          readerId
          graderId
          soundsNative
          understandable
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listReadings = /* GraphQL */ `
  query ListReadings(
    $filter: ModelReadingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReadings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        passage {
          id
          text
          difficulty
          language
          createdAt
          updatedAt
        }
        recording {
          bucket
          key
          region
        }
        language
        readerId
        grades {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getGrade = /* GraphQL */ `
  query GetGrade($id: ID!) {
    getGrade(id: $id) {
      id
      readerId
      graderId
      soundsNative
      understandable
      createdAt
      updatedAt
    }
  }
`;
export const listGrades = /* GraphQL */ `
  query ListGrades(
    $filter: ModelGradeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        readerId
        graderId
        soundsNative
        understandable
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const passagesByLanguageAndDifficulty = /* GraphQL */ `
  query PassagesByLanguageAndDifficulty(
    $language: Language
    $difficulty: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPassageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    passagesByLanguageAndDifficulty(
      language: $language
      difficulty: $difficulty
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        text
        difficulty
        language
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const readingsByReaderId = /* GraphQL */ `
  query ReadingsByReaderId(
    $readerId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelReadingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    readingsByReaderId(
      readerId: $readerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        passage {
          id
          text
          difficulty
          language
          createdAt
          updatedAt
        }
        recording {
          bucket
          key
          region
        }
        language
        readerId
        grades {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const gradesByReaderId = /* GraphQL */ `
  query GradesByReaderId(
    $readerId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelGradeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gradesByReaderId(
      readerId: $readerId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        readerId
        graderId
        soundsNative
        understandable
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const gradesByGraderId = /* GraphQL */ `
  query GradesByGraderId(
    $graderId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelGradeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gradesByGraderId(
      graderId: $graderId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        readerId
        graderId
        soundsNative
        understandable
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
