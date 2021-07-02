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
export const passagesByLanguageAndDifficulty = /* GraphQL */ `
  query PassagesByLanguageAndDifficulty(
    $language: String
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
