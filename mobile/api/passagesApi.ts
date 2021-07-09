/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateProfileInput = {
  id?: string | null,
  userId: string,
  gradingLanguage: string,
  readingLanguage: string,
  difficulty: string,
  theme: string,
};

export type ModelProfileConditionInput = {
  userId?: ModelIDInput | null,
  gradingLanguage?: ModelStringInput | null,
  readingLanguage?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type Profile = {
  __typename: "Profile",
  id: string,
  userId: string,
  gradingLanguage: string,
  readingLanguage: string,
  difficulty: string,
  theme: string,
  readings?: ModelReadingConnection | null,
  grades?: ModelGradeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelReadingConnection = {
  __typename: "ModelReadingConnection",
  items?:  Array<Reading | null > | null,
  nextToken?: string | null,
};

export type Reading = {
  __typename: "Reading",
  id: string,
  text: string,
  difficulty: string,
  language: string,
  readerId: string,
  recording: Recording,
  grades?: ModelGradeConnection | null,
  createdAt: string,
  updatedAt: string,
};

export type Recording = {
  __typename: "Recording",
  bucket: string,
  key: string,
  region: string,
};

export type ModelGradeConnection = {
  __typename: "ModelGradeConnection",
  items?:  Array<Grade | null > | null,
  nextToken?: string | null,
};

export type Grade = {
  __typename: "Grade",
  id: string,
  reading: Reading,
  readingId: string,
  readerId: string,
  graderId: string,
  soundsNative: number,
  understandable: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateProfileInput = {
  id: string,
  userId?: string | null,
  gradingLanguage?: string | null,
  readingLanguage?: string | null,
  difficulty?: string | null,
  theme?: string | null,
};

export type DeleteProfileInput = {
  id: string,
};

export type CreateReadingInput = {
  id?: string | null,
  text: string,
  difficulty: string,
  language: string,
  readerId: string,
  recording: RecordingInput,
};

export type RecordingInput = {
  bucket: string,
  key: string,
  region: string,
};

export type ModelReadingConditionInput = {
  text?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  language?: ModelStringInput | null,
  readerId?: ModelIDInput | null,
  and?: Array< ModelReadingConditionInput | null > | null,
  or?: Array< ModelReadingConditionInput | null > | null,
  not?: ModelReadingConditionInput | null,
};

export type UpdateReadingInput = {
  id: string,
  text?: string | null,
  difficulty?: string | null,
  language?: string | null,
  readerId?: string | null,
  recording?: RecordingInput | null,
};

export type DeleteReadingInput = {
  id: string,
};

export type CreateGradeInput = {
  id?: string | null,
  readingId: string,
  readerId: string,
  graderId: string,
  soundsNative: number,
  understandable: number,
};

export type ModelGradeConditionInput = {
  readingId?: ModelIDInput | null,
  readerId?: ModelIDInput | null,
  graderId?: ModelIDInput | null,
  soundsNative?: ModelIntInput | null,
  understandable?: ModelIntInput | null,
  and?: Array< ModelGradeConditionInput | null > | null,
  or?: Array< ModelGradeConditionInput | null > | null,
  not?: ModelGradeConditionInput | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateGradeInput = {
  id: string,
  readingId?: string | null,
  readerId?: string | null,
  graderId?: string | null,
  soundsNative?: number | null,
  understandable?: number | null,
};

export type DeleteGradeInput = {
  id: string,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  userId?: ModelIDInput | null,
  gradingLanguage?: ModelStringInput | null,
  readingLanguage?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  theme?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items?:  Array<Profile | null > | null,
  nextToken?: string | null,
};

export type ModelReadingFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  difficulty?: ModelStringInput | null,
  language?: ModelStringInput | null,
  readerId?: ModelIDInput | null,
  and?: Array< ModelReadingFilterInput | null > | null,
  or?: Array< ModelReadingFilterInput | null > | null,
  not?: ModelReadingFilterInput | null,
};

export type ModelGradeFilterInput = {
  id?: ModelIDInput | null,
  readingId?: ModelIDInput | null,
  readerId?: ModelIDInput | null,
  graderId?: ModelIDInput | null,
  soundsNative?: ModelIntInput | null,
  understandable?: ModelIntInput | null,
  and?: Array< ModelGradeFilterInput | null > | null,
  or?: Array< ModelGradeFilterInput | null > | null,
  not?: ModelGradeFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    gradingLanguage: string,
    readingLanguage: string,
    difficulty: string,
    theme: string,
    readings?:  {
      __typename: "ModelReadingConnection",
      items?:  Array< {
        __typename: "Reading",
        id: string,
        text: string,
        difficulty: string,
        language: string,
        readerId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    gradingLanguage: string,
    readingLanguage: string,
    difficulty: string,
    theme: string,
    readings?:  {
      __typename: "ModelReadingConnection",
      items?:  Array< {
        __typename: "Reading",
        id: string,
        text: string,
        difficulty: string,
        language: string,
        readerId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    gradingLanguage: string,
    readingLanguage: string,
    difficulty: string,
    theme: string,
    readings?:  {
      __typename: "ModelReadingConnection",
      items?:  Array< {
        __typename: "Reading",
        id: string,
        text: string,
        difficulty: string,
        language: string,
        readerId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateReadingMutationVariables = {
  input: CreateReadingInput,
  condition?: ModelReadingConditionInput | null,
};

export type CreateReadingMutation = {
  createReading?:  {
    __typename: "Reading",
    id: string,
    text: string,
    difficulty: string,
    language: string,
    readerId: string,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateReadingMutationVariables = {
  input: UpdateReadingInput,
  condition?: ModelReadingConditionInput | null,
};

export type UpdateReadingMutation = {
  updateReading?:  {
    __typename: "Reading",
    id: string,
    text: string,
    difficulty: string,
    language: string,
    readerId: string,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteReadingMutationVariables = {
  input: DeleteReadingInput,
  condition?: ModelReadingConditionInput | null,
};

export type DeleteReadingMutation = {
  deleteReading?:  {
    __typename: "Reading",
    id: string,
    text: string,
    difficulty: string,
    language: string,
    readerId: string,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateGradeMutationVariables = {
  input: CreateGradeInput,
  condition?: ModelGradeConditionInput | null,
};

export type CreateGradeMutation = {
  createGrade?:  {
    __typename: "Grade",
    id: string,
    reading:  {
      __typename: "Reading",
      id: string,
      text: string,
      difficulty: string,
      language: string,
      readerId: string,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    readingId: string,
    readerId: string,
    graderId: string,
    soundsNative: number,
    understandable: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateGradeMutationVariables = {
  input: UpdateGradeInput,
  condition?: ModelGradeConditionInput | null,
};

export type UpdateGradeMutation = {
  updateGrade?:  {
    __typename: "Grade",
    id: string,
    reading:  {
      __typename: "Reading",
      id: string,
      text: string,
      difficulty: string,
      language: string,
      readerId: string,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    readingId: string,
    readerId: string,
    graderId: string,
    soundsNative: number,
    understandable: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteGradeMutationVariables = {
  input: DeleteGradeInput,
  condition?: ModelGradeConditionInput | null,
};

export type DeleteGradeMutation = {
  deleteGrade?:  {
    __typename: "Grade",
    id: string,
    reading:  {
      __typename: "Reading",
      id: string,
      text: string,
      difficulty: string,
      language: string,
      readerId: string,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    readingId: string,
    readerId: string,
    graderId: string,
    soundsNative: number,
    understandable: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    gradingLanguage: string,
    readingLanguage: string,
    difficulty: string,
    theme: string,
    readings?:  {
      __typename: "ModelReadingConnection",
      items?:  Array< {
        __typename: "Reading",
        id: string,
        text: string,
        difficulty: string,
        language: string,
        readerId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items?:  Array< {
      __typename: "Profile",
      id: string,
      userId: string,
      gradingLanguage: string,
      readingLanguage: string,
      difficulty: string,
      theme: string,
      readings?:  {
        __typename: "ModelReadingConnection",
        nextToken?: string | null,
      } | null,
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetReadingQueryVariables = {
  id: string,
};

export type GetReadingQuery = {
  getReading?:  {
    __typename: "Reading",
    id: string,
    text: string,
    difficulty: string,
    language: string,
    readerId: string,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListReadingsQueryVariables = {
  filter?: ModelReadingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListReadingsQuery = {
  listReadings?:  {
    __typename: "ModelReadingConnection",
    items?:  Array< {
      __typename: "Reading",
      id: string,
      text: string,
      difficulty: string,
      language: string,
      readerId: string,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GetGradeQueryVariables = {
  id: string,
};

export type GetGradeQuery = {
  getGrade?:  {
    __typename: "Grade",
    id: string,
    reading:  {
      __typename: "Reading",
      id: string,
      text: string,
      difficulty: string,
      language: string,
      readerId: string,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    readingId: string,
    readerId: string,
    graderId: string,
    soundsNative: number,
    understandable: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListGradesQueryVariables = {
  filter?: ModelGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGradesQuery = {
  listGrades?:  {
    __typename: "ModelGradeConnection",
    items?:  Array< {
      __typename: "Grade",
      id: string,
      reading:  {
        __typename: "Reading",
        id: string,
        text: string,
        difficulty: string,
        language: string,
        readerId: string,
        createdAt: string,
        updatedAt: string,
      },
      readingId: string,
      readerId: string,
      graderId: string,
      soundsNative: number,
      understandable: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ProfileByUserIdQueryVariables = {
  userId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfileByUserIdQuery = {
  profileByUserId?:  {
    __typename: "ModelProfileConnection",
    items?:  Array< {
      __typename: "Profile",
      id: string,
      userId: string,
      gradingLanguage: string,
      readingLanguage: string,
      difficulty: string,
      theme: string,
      readings?:  {
        __typename: "ModelReadingConnection",
        nextToken?: string | null,
      } | null,
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ReadingsByLanguageQueryVariables = {
  language?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReadingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReadingsByLanguageQuery = {
  readingsByLanguage?:  {
    __typename: "ModelReadingConnection",
    items?:  Array< {
      __typename: "Reading",
      id: string,
      text: string,
      difficulty: string,
      language: string,
      readerId: string,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ReadingsByReaderIdQueryVariables = {
  readerId?: string | null,
  language?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelReadingFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ReadingsByReaderIdQuery = {
  readingsByReaderId?:  {
    __typename: "ModelReadingConnection",
    items?:  Array< {
      __typename: "Reading",
      id: string,
      text: string,
      difficulty: string,
      language: string,
      readerId: string,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GradesByReadingIdQueryVariables = {
  readingId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GradesByReadingIdQuery = {
  gradesByReadingId?:  {
    __typename: "ModelGradeConnection",
    items?:  Array< {
      __typename: "Grade",
      id: string,
      reading:  {
        __typename: "Reading",
        id: string,
        text: string,
        difficulty: string,
        language: string,
        readerId: string,
        createdAt: string,
        updatedAt: string,
      },
      readingId: string,
      readerId: string,
      graderId: string,
      soundsNative: number,
      understandable: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GradesByReaderIdQueryVariables = {
  readerId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GradesByReaderIdQuery = {
  gradesByReaderId?:  {
    __typename: "ModelGradeConnection",
    items?:  Array< {
      __typename: "Grade",
      id: string,
      reading:  {
        __typename: "Reading",
        id: string,
        text: string,
        difficulty: string,
        language: string,
        readerId: string,
        createdAt: string,
        updatedAt: string,
      },
      readingId: string,
      readerId: string,
      graderId: string,
      soundsNative: number,
      understandable: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type GradesByGraderIdQueryVariables = {
  graderId?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelGradeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type GradesByGraderIdQuery = {
  gradesByGraderId?:  {
    __typename: "ModelGradeConnection",
    items?:  Array< {
      __typename: "Grade",
      id: string,
      reading:  {
        __typename: "Reading",
        id: string,
        text: string,
        difficulty: string,
        language: string,
        readerId: string,
        createdAt: string,
        updatedAt: string,
      },
      readingId: string,
      readerId: string,
      graderId: string,
      soundsNative: number,
      understandable: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    gradingLanguage: string,
    readingLanguage: string,
    difficulty: string,
    theme: string,
    readings?:  {
      __typename: "ModelReadingConnection",
      items?:  Array< {
        __typename: "Reading",
        id: string,
        text: string,
        difficulty: string,
        language: string,
        readerId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    gradingLanguage: string,
    readingLanguage: string,
    difficulty: string,
    theme: string,
    readings?:  {
      __typename: "ModelReadingConnection",
      items?:  Array< {
        __typename: "Reading",
        id: string,
        text: string,
        difficulty: string,
        language: string,
        readerId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    id: string,
    userId: string,
    gradingLanguage: string,
    readingLanguage: string,
    difficulty: string,
    theme: string,
    readings?:  {
      __typename: "ModelReadingConnection",
      items?:  Array< {
        __typename: "Reading",
        id: string,
        text: string,
        difficulty: string,
        language: string,
        readerId: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReadingSubscription = {
  onCreateReading?:  {
    __typename: "Reading",
    id: string,
    text: string,
    difficulty: string,
    language: string,
    readerId: string,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateReadingSubscription = {
  onUpdateReading?:  {
    __typename: "Reading",
    id: string,
    text: string,
    difficulty: string,
    language: string,
    readerId: string,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteReadingSubscription = {
  onDeleteReading?:  {
    __typename: "Reading",
    id: string,
    text: string,
    difficulty: string,
    language: string,
    readerId: string,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
        readingId: string,
        readerId: string,
        graderId: string,
        soundsNative: number,
        understandable: number,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken?: string | null,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateGradeSubscription = {
  onCreateGrade?:  {
    __typename: "Grade",
    id: string,
    reading:  {
      __typename: "Reading",
      id: string,
      text: string,
      difficulty: string,
      language: string,
      readerId: string,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    readingId: string,
    readerId: string,
    graderId: string,
    soundsNative: number,
    understandable: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateGradeSubscription = {
  onUpdateGrade?:  {
    __typename: "Grade",
    id: string,
    reading:  {
      __typename: "Reading",
      id: string,
      text: string,
      difficulty: string,
      language: string,
      readerId: string,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    readingId: string,
    readerId: string,
    graderId: string,
    soundsNative: number,
    understandable: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteGradeSubscription = {
  onDeleteGrade?:  {
    __typename: "Grade",
    id: string,
    reading:  {
      __typename: "Reading",
      id: string,
      text: string,
      difficulty: string,
      language: string,
      readerId: string,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      grades?:  {
        __typename: "ModelGradeConnection",
        nextToken?: string | null,
      } | null,
      createdAt: string,
      updatedAt: string,
    },
    readingId: string,
    readerId: string,
    graderId: string,
    soundsNative: number,
    understandable: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
