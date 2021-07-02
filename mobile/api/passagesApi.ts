/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePassageInput = {
  id?: string | null,
  text: string,
  difficulty: number,
  language: Language,
};

export enum Language {
  english = "english",
  spanish = "spanish",
}


export type ModelPassageConditionInput = {
  text?: ModelStringInput | null,
  difficulty?: ModelIntInput | null,
  language?: ModelLanguageInput | null,
  and?: Array< ModelPassageConditionInput | null > | null,
  or?: Array< ModelPassageConditionInput | null > | null,
  not?: ModelPassageConditionInput | null,
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

export type ModelLanguageInput = {
  eq?: Language | null,
  ne?: Language | null,
};

export type Passage = {
  __typename: "Passage",
  id: string,
  text: string,
  difficulty: number,
  language: Language,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePassageInput = {
  id: string,
  text?: string | null,
  difficulty?: number | null,
  language?: Language | null,
};

export type DeletePassageInput = {
  id: string,
};

export type CreateReadingInput = {
  id?: string | null,
  recording: RecordingInput,
  language: Language,
  readerId: string,
  readingPassageId?: string | null,
};

export type RecordingInput = {
  bucket: string,
  key: string,
  region: string,
};

export type ModelReadingConditionInput = {
  language?: ModelLanguageInput | null,
  readerId?: ModelIDInput | null,
  and?: Array< ModelReadingConditionInput | null > | null,
  or?: Array< ModelReadingConditionInput | null > | null,
  not?: ModelReadingConditionInput | null,
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

export type Reading = {
  __typename: "Reading",
  id: string,
  passage?: Passage | null,
  recording: Recording,
  language: Language,
  readerId: string,
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
  readerId: string,
  graderId: string,
  soundsNative: number,
  understandable: number,
  createdAt: string,
  updatedAt: string,
};

export type UpdateReadingInput = {
  id: string,
  recording?: RecordingInput | null,
  language?: Language | null,
  readerId?: string | null,
  readingPassageId?: string | null,
};

export type DeleteReadingInput = {
  id: string,
};

export type CreateGradeInput = {
  id?: string | null,
  readerId: string,
  graderId: string,
  soundsNative: number,
  understandable: number,
  readingGradesId?: string | null,
};

export type ModelGradeConditionInput = {
  readerId?: ModelIDInput | null,
  graderId?: ModelIDInput | null,
  soundsNative?: ModelIntInput | null,
  understandable?: ModelIntInput | null,
  and?: Array< ModelGradeConditionInput | null > | null,
  or?: Array< ModelGradeConditionInput | null > | null,
  not?: ModelGradeConditionInput | null,
};

export type UpdateGradeInput = {
  id: string,
  readerId?: string | null,
  graderId?: string | null,
  soundsNative?: number | null,
  understandable?: number | null,
  readingGradesId?: string | null,
};

export type DeleteGradeInput = {
  id: string,
};

export type ModelPassageFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  difficulty?: ModelIntInput | null,
  language?: ModelLanguageInput | null,
  and?: Array< ModelPassageFilterInput | null > | null,
  or?: Array< ModelPassageFilterInput | null > | null,
  not?: ModelPassageFilterInput | null,
};

export type ModelPassageConnection = {
  __typename: "ModelPassageConnection",
  items?:  Array<Passage | null > | null,
  nextToken?: string | null,
};

export type ModelReadingFilterInput = {
  id?: ModelIDInput | null,
  language?: ModelLanguageInput | null,
  readerId?: ModelIDInput | null,
  and?: Array< ModelReadingFilterInput | null > | null,
  or?: Array< ModelReadingFilterInput | null > | null,
  not?: ModelReadingFilterInput | null,
};

export type ModelReadingConnection = {
  __typename: "ModelReadingConnection",
  items?:  Array<Reading | null > | null,
  nextToken?: string | null,
};

export type ModelGradeFilterInput = {
  id?: ModelIDInput | null,
  readerId?: ModelIDInput | null,
  graderId?: ModelIDInput | null,
  soundsNative?: ModelIntInput | null,
  understandable?: ModelIntInput | null,
  and?: Array< ModelGradeFilterInput | null > | null,
  or?: Array< ModelGradeFilterInput | null > | null,
  not?: ModelGradeFilterInput | null,
};

export type ModelIntKeyConditionInput = {
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreatePassageMutationVariables = {
  input: CreatePassageInput,
  condition?: ModelPassageConditionInput | null,
};

export type CreatePassageMutation = {
  createPassage?:  {
    __typename: "Passage",
    id: string,
    text: string,
    difficulty: number,
    language: Language,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdatePassageMutationVariables = {
  input: UpdatePassageInput,
  condition?: ModelPassageConditionInput | null,
};

export type UpdatePassageMutation = {
  updatePassage?:  {
    __typename: "Passage",
    id: string,
    text: string,
    difficulty: number,
    language: Language,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeletePassageMutationVariables = {
  input: DeletePassageInput,
  condition?: ModelPassageConditionInput | null,
};

export type DeletePassageMutation = {
  deletePassage?:  {
    __typename: "Passage",
    id: string,
    text: string,
    difficulty: number,
    language: Language,
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
    passage?:  {
      __typename: "Passage",
      id: string,
      text: string,
      difficulty: number,
      language: Language,
      createdAt: string,
      updatedAt: string,
    } | null,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    language: Language,
    readerId: string,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
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
    passage?:  {
      __typename: "Passage",
      id: string,
      text: string,
      difficulty: number,
      language: Language,
      createdAt: string,
      updatedAt: string,
    } | null,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    language: Language,
    readerId: string,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
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
    passage?:  {
      __typename: "Passage",
      id: string,
      text: string,
      difficulty: number,
      language: Language,
      createdAt: string,
      updatedAt: string,
    } | null,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    language: Language,
    readerId: string,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
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
    readerId: string,
    graderId: string,
    soundsNative: number,
    understandable: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetPassageQueryVariables = {
  id: string,
};

export type GetPassageQuery = {
  getPassage?:  {
    __typename: "Passage",
    id: string,
    text: string,
    difficulty: number,
    language: Language,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListPassagesQueryVariables = {
  filter?: ModelPassageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPassagesQuery = {
  listPassages?:  {
    __typename: "ModelPassageConnection",
    items?:  Array< {
      __typename: "Passage",
      id: string,
      text: string,
      difficulty: number,
      language: Language,
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
    passage?:  {
      __typename: "Passage",
      id: string,
      text: string,
      difficulty: number,
      language: Language,
      createdAt: string,
      updatedAt: string,
    } | null,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    language: Language,
    readerId: string,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
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
      passage?:  {
        __typename: "Passage",
        id: string,
        text: string,
        difficulty: number,
        language: Language,
        createdAt: string,
        updatedAt: string,
      } | null,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      language: Language,
      readerId: string,
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

export type PassagesByLanguageAndDifficultyQueryVariables = {
  language?: Language | null,
  difficulty?: ModelIntKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelPassageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type PassagesByLanguageAndDifficultyQuery = {
  passagesByLanguageAndDifficulty?:  {
    __typename: "ModelPassageConnection",
    items?:  Array< {
      __typename: "Passage",
      id: string,
      text: string,
      difficulty: number,
      language: Language,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type ReadingsByReaderIdQueryVariables = {
  readerId?: string | null,
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
      passage?:  {
        __typename: "Passage",
        id: string,
        text: string,
        difficulty: number,
        language: Language,
        createdAt: string,
        updatedAt: string,
      } | null,
      recording:  {
        __typename: "Recording",
        bucket: string,
        key: string,
        region: string,
      },
      language: Language,
      readerId: string,
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

export type OnCreatePassageSubscription = {
  onCreatePassage?:  {
    __typename: "Passage",
    id: string,
    text: string,
    difficulty: number,
    language: Language,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdatePassageSubscription = {
  onUpdatePassage?:  {
    __typename: "Passage",
    id: string,
    text: string,
    difficulty: number,
    language: Language,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeletePassageSubscription = {
  onDeletePassage?:  {
    __typename: "Passage",
    id: string,
    text: string,
    difficulty: number,
    language: Language,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateReadingSubscription = {
  onCreateReading?:  {
    __typename: "Reading",
    id: string,
    passage?:  {
      __typename: "Passage",
      id: string,
      text: string,
      difficulty: number,
      language: Language,
      createdAt: string,
      updatedAt: string,
    } | null,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    language: Language,
    readerId: string,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
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
    passage?:  {
      __typename: "Passage",
      id: string,
      text: string,
      difficulty: number,
      language: Language,
      createdAt: string,
      updatedAt: string,
    } | null,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    language: Language,
    readerId: string,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
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
    passage?:  {
      __typename: "Passage",
      id: string,
      text: string,
      difficulty: number,
      language: Language,
      createdAt: string,
      updatedAt: string,
    } | null,
    recording:  {
      __typename: "Recording",
      bucket: string,
      key: string,
      region: string,
    },
    language: Language,
    readerId: string,
    grades?:  {
      __typename: "ModelGradeConnection",
      items?:  Array< {
        __typename: "Grade",
        id: string,
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
    readerId: string,
    graderId: string,
    soundsNative: number,
    understandable: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
