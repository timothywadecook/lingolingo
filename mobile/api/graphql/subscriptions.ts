/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
export const onCreateReading = /* GraphQL */ `
  subscription OnCreateReading {
    onCreateReading {
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
export const onUpdateReading = /* GraphQL */ `
  subscription OnUpdateReading {
    onUpdateReading {
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
export const onDeleteReading = /* GraphQL */ `
  subscription OnDeleteReading {
    onDeleteReading {
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
export const onCreateGrade = /* GraphQL */ `
  subscription OnCreateGrade {
    onCreateGrade {
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
export const onUpdateGrade = /* GraphQL */ `
  subscription OnUpdateGrade {
    onUpdateGrade {
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
export const onDeleteGrade = /* GraphQL */ `
  subscription OnDeleteGrade {
    onDeleteGrade {
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
