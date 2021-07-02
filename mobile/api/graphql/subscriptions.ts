/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreatePassage = /* GraphQL */ `
  subscription OnCreatePassage {
    onCreatePassage {
      id
      text
      difficulty
      language
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePassage = /* GraphQL */ `
  subscription OnUpdatePassage {
    onUpdatePassage {
      id
      text
      difficulty
      language
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePassage = /* GraphQL */ `
  subscription OnDeletePassage {
    onDeletePassage {
      id
      text
      difficulty
      language
      createdAt
      updatedAt
    }
  }
`;
export const onCreateReading = /* GraphQL */ `
  subscription OnCreateReading {
    onCreateReading {
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
export const onUpdateReading = /* GraphQL */ `
  subscription OnUpdateReading {
    onUpdateReading {
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
export const onDeleteReading = /* GraphQL */ `
  subscription OnDeleteReading {
    onDeleteReading {
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
export const onCreateGrade = /* GraphQL */ `
  subscription OnCreateGrade {
    onCreateGrade {
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
export const onUpdateGrade = /* GraphQL */ `
  subscription OnUpdateGrade {
    onUpdateGrade {
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
export const onDeleteGrade = /* GraphQL */ `
  subscription OnDeleteGrade {
    onDeleteGrade {
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
