/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createPassage = /* GraphQL */ `
  mutation CreatePassage(
    $input: CreatePassageInput!
    $condition: ModelPassageConditionInput
  ) {
    createPassage(input: $input, condition: $condition) {
      id
      text
      difficulty
      language
      createdAt
      updatedAt
    }
  }
`;
export const updatePassage = /* GraphQL */ `
  mutation UpdatePassage(
    $input: UpdatePassageInput!
    $condition: ModelPassageConditionInput
  ) {
    updatePassage(input: $input, condition: $condition) {
      id
      text
      difficulty
      language
      createdAt
      updatedAt
    }
  }
`;
export const deletePassage = /* GraphQL */ `
  mutation DeletePassage(
    $input: DeletePassageInput!
    $condition: ModelPassageConditionInput
  ) {
    deletePassage(input: $input, condition: $condition) {
      id
      text
      difficulty
      language
      createdAt
      updatedAt
    }
  }
`;
