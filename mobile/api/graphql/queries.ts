/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userId
        gradingLanguage
        readingLanguage
        difficulty
        theme
        readings {
          nextToken
        }
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
export const getReading = /* GraphQL */ `
  query GetReading($id: ID!) {
    getReading(id: $id) {
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
export const listReadings = /* GraphQL */ `
  query ListReadings(
    $filter: ModelReadingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listReadings(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getGrade = /* GraphQL */ `
  query GetGrade($id: ID!) {
    getGrade(id: $id) {
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
export const listGrades = /* GraphQL */ `
  query ListGrades(
    $filter: ModelGradeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listGrades(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        reading {
          id
          text
          difficulty
          language
          readerId
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
      nextToken
    }
  }
`;
export const profileByUserId = /* GraphQL */ `
  query ProfileByUserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profileByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        userId
        gradingLanguage
        readingLanguage
        difficulty
        theme
        readings {
          nextToken
        }
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
export const readingsByLanguage = /* GraphQL */ `
  query ReadingsByLanguage(
    $language: String
    $sortDirection: ModelSortDirection
    $filter: ModelReadingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    readingsByLanguage(
      language: $language
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
      nextToken
    }
  }
`;
export const readingsByReaderId = /* GraphQL */ `
  query ReadingsByReaderId(
    $readerId: ID
    $language: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelReadingFilterInput
    $limit: Int
    $nextToken: String
  ) {
    readingsByReaderId(
      readerId: $readerId
      language: $language
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
      nextToken
    }
  }
`;
export const gradesByReadingId = /* GraphQL */ `
  query GradesByReadingId(
    $readingId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelGradeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    gradesByReadingId(
      readingId: $readingId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        reading {
          id
          text
          difficulty
          language
          readerId
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
        reading {
          id
          text
          difficulty
          language
          readerId
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
        reading {
          id
          text
          difficulty
          language
          readerId
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
      nextToken
    }
  }
`;
