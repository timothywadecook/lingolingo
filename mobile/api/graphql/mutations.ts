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
export const createReading = /* GraphQL */ `
  mutation CreateReading(
    $input: CreateReadingInput!
    $condition: ModelReadingConditionInput
  ) {
    createReading(input: $input, condition: $condition) {
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
export const updateReading = /* GraphQL */ `
  mutation UpdateReading(
    $input: UpdateReadingInput!
    $condition: ModelReadingConditionInput
  ) {
    updateReading(input: $input, condition: $condition) {
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
export const deleteReading = /* GraphQL */ `
  mutation DeleteReading(
    $input: DeleteReadingInput!
    $condition: ModelReadingConditionInput
  ) {
    deleteReading(input: $input, condition: $condition) {
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
export const createGrade = /* GraphQL */ `
  mutation CreateGrade(
    $input: CreateGradeInput!
    $condition: ModelGradeConditionInput
  ) {
    createGrade(input: $input, condition: $condition) {
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
export const updateGrade = /* GraphQL */ `
  mutation UpdateGrade(
    $input: UpdateGradeInput!
    $condition: ModelGradeConditionInput
  ) {
    updateGrade(input: $input, condition: $condition) {
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
export const deleteGrade = /* GraphQL */ `
  mutation DeleteGrade(
    $input: DeleteGradeInput!
    $condition: ModelGradeConditionInput
  ) {
    deleteGrade(input: $input, condition: $condition) {
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
