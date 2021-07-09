/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
      id
      userId
      gradingLanguage
      readingLanguage
      difficulty
      theme
      readings {
        items {
          id
          text
          difficulty
          language
          readerId
          createdAt
          updatedAt
        }
        nextToken
      }
      grades {
        items {
          id
          readingId
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
      id
      userId
      gradingLanguage
      readingLanguage
      difficulty
      theme
      readings {
        items {
          id
          text
          difficulty
          language
          readerId
          createdAt
          updatedAt
        }
        nextToken
      }
      grades {
        items {
          id
          readingId
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
      id
      userId
      gradingLanguage
      readingLanguage
      difficulty
      theme
      readings {
        items {
          id
          text
          difficulty
          language
          readerId
          createdAt
          updatedAt
        }
        nextToken
      }
      grades {
        items {
          id
          readingId
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
export const createReading = /* GraphQL */ `
  mutation CreateReading(
    $input: CreateReadingInput!
    $condition: ModelReadingConditionInput
  ) {
    createReading(input: $input, condition: $condition) {
      id
      text
      difficulty
      language
      readerId
      recording {
        bucket
        key
        region
      }
      grades {
        items {
          id
          readingId
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
      text
      difficulty
      language
      readerId
      recording {
        bucket
        key
        region
      }
      grades {
        items {
          id
          readingId
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
      text
      difficulty
      language
      readerId
      recording {
        bucket
        key
        region
      }
      grades {
        items {
          id
          readingId
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
      reading {
        id
        text
        difficulty
        language
        readerId
        recording {
          bucket
          key
          region
        }
        grades {
          nextToken
        }
        createdAt
        updatedAt
      }
      readingId
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
      reading {
        id
        text
        difficulty
        language
        readerId
        recording {
          bucket
          key
          region
        }
        grades {
          nextToken
        }
        createdAt
        updatedAt
      }
      readingId
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
      reading {
        id
        text
        difficulty
        language
        readerId
        recording {
          bucket
          key
          region
        }
        grades {
          nextToken
        }
        createdAt
        updatedAt
      }
      readingId
      readerId
      graderId
      soundsNative
      understandable
      createdAt
      updatedAt
    }
  }
`;
