/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreatePassageInput = {
  id?: string | null,
  text: string,
  difficulty: number,
  language: string,
};

export type ModelPassageConditionInput = {
  text?: ModelStringInput | null,
  difficulty?: ModelIntInput | null,
  language?: ModelStringInput | null,
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

export type Passage = {
  __typename: "Passage",
  id: string,
  text: string,
  difficulty: number,
  language: string,
  createdAt: string,
  updatedAt: string,
};

export type UpdatePassageInput = {
  id: string,
  text?: string | null,
  difficulty?: number | null,
  language?: string | null,
};

export type DeletePassageInput = {
  id: string,
};

export type ModelPassageFilterInput = {
  id?: ModelIDInput | null,
  text?: ModelStringInput | null,
  difficulty?: ModelIntInput | null,
  language?: ModelStringInput | null,
  and?: Array< ModelPassageFilterInput | null > | null,
  or?: Array< ModelPassageFilterInput | null > | null,
  not?: ModelPassageFilterInput | null,
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

export type ModelPassageConnection = {
  __typename: "ModelPassageConnection",
  items?:  Array<Passage | null > | null,
  nextToken?: string | null,
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
    language: string,
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
    language: string,
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
    language: string,
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
    language: string,
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
      language: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken?: string | null,
  } | null,
};

export type PassagesByLanguageAndDifficultyQueryVariables = {
  language?: string | null,
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
      language: string,
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
    language: string,
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
    language: string,
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
    language: string,
    createdAt: string,
    updatedAt: string,
  } | null,
};
