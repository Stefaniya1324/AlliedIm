/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCategoryInput = {
  id?: string | null,
  title: string,
  poster: string,
  _version?: number | null,
};

export type ModelCategoryConditionInput = {
  title?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  and?: Array< ModelCategoryConditionInput | null > | null,
  or?: Array< ModelCategoryConditionInput | null > | null,
  not?: ModelCategoryConditionInput | null,
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

export type Category = {
  __typename: "Category",
  id?: string,
  title?: string,
  poster?: string,
  wines?: ModelWineConnection,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type ModelWineConnection = {
  __typename: "ModelWineConnection",
  items?:  Array<Wine | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Wine = {
  __typename: "Wine",
  id?: string,
  title?: string,
  origin?: string | null,
  year?: number | null,
  rating?: number | null,
  categoryID?: string,
  more?: ModelMoreConnection,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type ModelMoreConnection = {
  __typename: "ModelMoreConnection",
  items?:  Array<More | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type More = {
  __typename: "More",
  id?: string,
  name?: string | null,
  front?: string | null,
  back?: string | null,
  sell?: string | null,
  poster?: string | null,
  wineID?: string,
  wine?: Wine,
  _version?: number,
  _deleted?: boolean | null,
  _lastChangedAt?: number,
  createdAt?: string,
  updatedAt?: string,
  owner?: string | null,
};

export type UpdateCategoryInput = {
  id: string,
  title?: string | null,
  poster?: string | null,
  _version?: number | null,
};

export type DeleteCategoryInput = {
  id: string,
  _version?: number | null,
};

export type CreateWineInput = {
  id?: string | null,
  title: string,
  origin?: string | null,
  year?: number | null,
  rating?: number | null,
  categoryID: string,
  _version?: number | null,
};

export type ModelWineConditionInput = {
  title?: ModelStringInput | null,
  origin?: ModelStringInput | null,
  year?: ModelIntInput | null,
  rating?: ModelIntInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelWineConditionInput | null > | null,
  or?: Array< ModelWineConditionInput | null > | null,
  not?: ModelWineConditionInput | null,
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

export type UpdateWineInput = {
  id: string,
  title?: string | null,
  origin?: string | null,
  year?: number | null,
  rating?: number | null,
  categoryID?: string | null,
  _version?: number | null,
};

export type DeleteWineInput = {
  id: string,
  _version?: number | null,
};

export type CreateMoreInput = {
  id?: string | null,
  name?: string | null,
  front?: string | null,
  back?: string | null,
  sell?: string | null,
  poster?: string | null,
  wineID: string,
  _version?: number | null,
};

export type ModelMoreConditionInput = {
  name?: ModelStringInput | null,
  front?: ModelStringInput | null,
  back?: ModelStringInput | null,
  sell?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  wineID?: ModelIDInput | null,
  and?: Array< ModelMoreConditionInput | null > | null,
  or?: Array< ModelMoreConditionInput | null > | null,
  not?: ModelMoreConditionInput | null,
};

export type UpdateMoreInput = {
  id: string,
  name?: string | null,
  front?: string | null,
  back?: string | null,
  sell?: string | null,
  poster?: string | null,
  wineID?: string | null,
  _version?: number | null,
};

export type DeleteMoreInput = {
  id: string,
  _version?: number | null,
};

export type ModelCategoryFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  and?: Array< ModelCategoryFilterInput | null > | null,
  or?: Array< ModelCategoryFilterInput | null > | null,
  not?: ModelCategoryFilterInput | null,
};

export type ModelCategoryConnection = {
  __typename: "ModelCategoryConnection",
  items?:  Array<Category | null > | null,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelWineFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  origin?: ModelStringInput | null,
  year?: ModelIntInput | null,
  rating?: ModelIntInput | null,
  categoryID?: ModelIDInput | null,
  and?: Array< ModelWineFilterInput | null > | null,
  or?: Array< ModelWineFilterInput | null > | null,
  not?: ModelWineFilterInput | null,
};

export type ModelMoreFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  front?: ModelStringInput | null,
  back?: ModelStringInput | null,
  sell?: ModelStringInput | null,
  poster?: ModelStringInput | null,
  wineID?: ModelIDInput | null,
  and?: Array< ModelMoreFilterInput | null > | null,
  or?: Array< ModelMoreFilterInput | null > | null,
  not?: ModelMoreFilterInput | null,
};

export type CreateCategoryMutationVariables = {
  input?: CreateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type CreateCategoryMutation = {
  createCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    poster: string,
    wines?:  {
      __typename: "ModelWineConnection",
      items?:  Array< {
        __typename: "Wine",
        id: string,
        title: string,
        origin?: string | null,
        year?: number | null,
        rating?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateCategoryMutationVariables = {
  input?: UpdateCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type UpdateCategoryMutation = {
  updateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    poster: string,
    wines?:  {
      __typename: "ModelWineConnection",
      items?:  Array< {
        __typename: "Wine",
        id: string,
        title: string,
        origin?: string | null,
        year?: number | null,
        rating?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteCategoryMutationVariables = {
  input?: DeleteCategoryInput,
  condition?: ModelCategoryConditionInput | null,
};

export type DeleteCategoryMutation = {
  deleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    poster: string,
    wines?:  {
      __typename: "ModelWineConnection",
      items?:  Array< {
        __typename: "Wine",
        id: string,
        title: string,
        origin?: string | null,
        year?: number | null,
        rating?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateWineMutationVariables = {
  input?: CreateWineInput,
  condition?: ModelWineConditionInput | null,
};

export type CreateWineMutation = {
  createWine?:  {
    __typename: "Wine",
    id: string,
    title: string,
    origin?: string | null,
    year?: number | null,
    rating?: number | null,
    categoryID: string,
    more?:  {
      __typename: "ModelMoreConnection",
      items?:  Array< {
        __typename: "More",
        id: string,
        name?: string | null,
        front?: string | null,
        back?: string | null,
        sell?: string | null,
        poster?: string | null,
        wineID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateWineMutationVariables = {
  input?: UpdateWineInput,
  condition?: ModelWineConditionInput | null,
};

export type UpdateWineMutation = {
  updateWine?:  {
    __typename: "Wine",
    id: string,
    title: string,
    origin?: string | null,
    year?: number | null,
    rating?: number | null,
    categoryID: string,
    more?:  {
      __typename: "ModelMoreConnection",
      items?:  Array< {
        __typename: "More",
        id: string,
        name?: string | null,
        front?: string | null,
        back?: string | null,
        sell?: string | null,
        poster?: string | null,
        wineID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteWineMutationVariables = {
  input?: DeleteWineInput,
  condition?: ModelWineConditionInput | null,
};

export type DeleteWineMutation = {
  deleteWine?:  {
    __typename: "Wine",
    id: string,
    title: string,
    origin?: string | null,
    year?: number | null,
    rating?: number | null,
    categoryID: string,
    more?:  {
      __typename: "ModelMoreConnection",
      items?:  Array< {
        __typename: "More",
        id: string,
        name?: string | null,
        front?: string | null,
        back?: string | null,
        sell?: string | null,
        poster?: string | null,
        wineID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type CreateMoreMutationVariables = {
  input?: CreateMoreInput,
  condition?: ModelMoreConditionInput | null,
};

export type CreateMoreMutation = {
  createMore?:  {
    __typename: "More",
    id: string,
    name?: string | null,
    front?: string | null,
    back?: string | null,
    sell?: string | null,
    poster?: string | null,
    wineID: string,
    wine?:  {
      __typename: "Wine",
      id: string,
      title: string,
      origin?: string | null,
      year?: number | null,
      rating?: number | null,
      categoryID: string,
      more?:  {
        __typename: "ModelMoreConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type UpdateMoreMutationVariables = {
  input?: UpdateMoreInput,
  condition?: ModelMoreConditionInput | null,
};

export type UpdateMoreMutation = {
  updateMore?:  {
    __typename: "More",
    id: string,
    name?: string | null,
    front?: string | null,
    back?: string | null,
    sell?: string | null,
    poster?: string | null,
    wineID: string,
    wine?:  {
      __typename: "Wine",
      id: string,
      title: string,
      origin?: string | null,
      year?: number | null,
      rating?: number | null,
      categoryID: string,
      more?:  {
        __typename: "ModelMoreConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type DeleteMoreMutationVariables = {
  input?: DeleteMoreInput,
  condition?: ModelMoreConditionInput | null,
};

export type DeleteMoreMutation = {
  deleteMore?:  {
    __typename: "More",
    id: string,
    name?: string | null,
    front?: string | null,
    back?: string | null,
    sell?: string | null,
    poster?: string | null,
    wineID: string,
    wine?:  {
      __typename: "Wine",
      id: string,
      title: string,
      origin?: string | null,
      year?: number | null,
      rating?: number | null,
      categoryID: string,
      more?:  {
        __typename: "ModelMoreConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type SyncCategoriesQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncCategoriesQuery = {
  syncCategories?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      poster: string,
      wines?:  {
        __typename: "ModelWineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetCategoryQueryVariables = {
  id?: string,
};

export type GetCategoryQuery = {
  getCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    poster: string,
    wines?:  {
      __typename: "ModelWineConnection",
      items?:  Array< {
        __typename: "Wine",
        id: string,
        title: string,
        origin?: string | null,
        year?: number | null,
        rating?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListCategorysQueryVariables = {
  filter?: ModelCategoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCategorysQuery = {
  listCategorys?:  {
    __typename: "ModelCategoryConnection",
    items?:  Array< {
      __typename: "Category",
      id: string,
      title: string,
      poster: string,
      wines?:  {
        __typename: "ModelWineConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncWinesQueryVariables = {
  filter?: ModelWineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncWinesQuery = {
  syncWines?:  {
    __typename: "ModelWineConnection",
    items?:  Array< {
      __typename: "Wine",
      id: string,
      title: string,
      origin?: string | null,
      year?: number | null,
      rating?: number | null,
      categoryID: string,
      more?:  {
        __typename: "ModelMoreConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetWineQueryVariables = {
  id?: string,
};

export type GetWineQuery = {
  getWine?:  {
    __typename: "Wine",
    id: string,
    title: string,
    origin?: string | null,
    year?: number | null,
    rating?: number | null,
    categoryID: string,
    more?:  {
      __typename: "ModelMoreConnection",
      items?:  Array< {
        __typename: "More",
        id: string,
        name?: string | null,
        front?: string | null,
        back?: string | null,
        sell?: string | null,
        poster?: string | null,
        wineID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListWinesQueryVariables = {
  filter?: ModelWineFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListWinesQuery = {
  listWines?:  {
    __typename: "ModelWineConnection",
    items?:  Array< {
      __typename: "Wine",
      id: string,
      title: string,
      origin?: string | null,
      year?: number | null,
      rating?: number | null,
      categoryID: string,
      more?:  {
        __typename: "ModelMoreConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncMoresQueryVariables = {
  filter?: ModelMoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncMoresQuery = {
  syncMores?:  {
    __typename: "ModelMoreConnection",
    items?:  Array< {
      __typename: "More",
      id: string,
      name?: string | null,
      front?: string | null,
      back?: string | null,
      sell?: string | null,
      poster?: string | null,
      wineID: string,
      wine?:  {
        __typename: "Wine",
        id: string,
        title: string,
        origin?: string | null,
        year?: number | null,
        rating?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetMoreQueryVariables = {
  id?: string,
};

export type GetMoreQuery = {
  getMore?:  {
    __typename: "More",
    id: string,
    name?: string | null,
    front?: string | null,
    back?: string | null,
    sell?: string | null,
    poster?: string | null,
    wineID: string,
    wine?:  {
      __typename: "Wine",
      id: string,
      title: string,
      origin?: string | null,
      year?: number | null,
      rating?: number | null,
      categoryID: string,
      more?:  {
        __typename: "ModelMoreConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type ListMoresQueryVariables = {
  filter?: ModelMoreFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMoresQuery = {
  listMores?:  {
    __typename: "ModelMoreConnection",
    items?:  Array< {
      __typename: "More",
      id: string,
      name?: string | null,
      front?: string | null,
      back?: string | null,
      sell?: string | null,
      poster?: string | null,
      wineID: string,
      wine?:  {
        __typename: "Wine",
        id: string,
        title: string,
        origin?: string | null,
        year?: number | null,
        rating?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null > | null,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateCategorySubscriptionVariables = {
  owner?: string,
};

export type OnCreateCategorySubscription = {
  onCreateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    poster: string,
    wines?:  {
      __typename: "ModelWineConnection",
      items?:  Array< {
        __typename: "Wine",
        id: string,
        title: string,
        origin?: string | null,
        year?: number | null,
        rating?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateCategorySubscriptionVariables = {
  owner?: string,
};

export type OnUpdateCategorySubscription = {
  onUpdateCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    poster: string,
    wines?:  {
      __typename: "ModelWineConnection",
      items?:  Array< {
        __typename: "Wine",
        id: string,
        title: string,
        origin?: string | null,
        year?: number | null,
        rating?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteCategorySubscriptionVariables = {
  owner?: string,
};

export type OnDeleteCategorySubscription = {
  onDeleteCategory?:  {
    __typename: "Category",
    id: string,
    title: string,
    poster: string,
    wines?:  {
      __typename: "ModelWineConnection",
      items?:  Array< {
        __typename: "Wine",
        id: string,
        title: string,
        origin?: string | null,
        year?: number | null,
        rating?: number | null,
        categoryID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateWineSubscriptionVariables = {
  owner?: string,
};

export type OnCreateWineSubscription = {
  onCreateWine?:  {
    __typename: "Wine",
    id: string,
    title: string,
    origin?: string | null,
    year?: number | null,
    rating?: number | null,
    categoryID: string,
    more?:  {
      __typename: "ModelMoreConnection",
      items?:  Array< {
        __typename: "More",
        id: string,
        name?: string | null,
        front?: string | null,
        back?: string | null,
        sell?: string | null,
        poster?: string | null,
        wineID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateWineSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateWineSubscription = {
  onUpdateWine?:  {
    __typename: "Wine",
    id: string,
    title: string,
    origin?: string | null,
    year?: number | null,
    rating?: number | null,
    categoryID: string,
    more?:  {
      __typename: "ModelMoreConnection",
      items?:  Array< {
        __typename: "More",
        id: string,
        name?: string | null,
        front?: string | null,
        back?: string | null,
        sell?: string | null,
        poster?: string | null,
        wineID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteWineSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteWineSubscription = {
  onDeleteWine?:  {
    __typename: "Wine",
    id: string,
    title: string,
    origin?: string | null,
    year?: number | null,
    rating?: number | null,
    categoryID: string,
    more?:  {
      __typename: "ModelMoreConnection",
      items?:  Array< {
        __typename: "More",
        id: string,
        name?: string | null,
        front?: string | null,
        back?: string | null,
        sell?: string | null,
        poster?: string | null,
        wineID: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        createdAt: string,
        updatedAt: string,
        owner?: string | null,
      } | null > | null,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnCreateMoreSubscriptionVariables = {
  owner?: string,
};

export type OnCreateMoreSubscription = {
  onCreateMore?:  {
    __typename: "More",
    id: string,
    name?: string | null,
    front?: string | null,
    back?: string | null,
    sell?: string | null,
    poster?: string | null,
    wineID: string,
    wine?:  {
      __typename: "Wine",
      id: string,
      title: string,
      origin?: string | null,
      year?: number | null,
      rating?: number | null,
      categoryID: string,
      more?:  {
        __typename: "ModelMoreConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnUpdateMoreSubscriptionVariables = {
  owner?: string,
};

export type OnUpdateMoreSubscription = {
  onUpdateMore?:  {
    __typename: "More",
    id: string,
    name?: string | null,
    front?: string | null,
    back?: string | null,
    sell?: string | null,
    poster?: string | null,
    wineID: string,
    wine?:  {
      __typename: "Wine",
      id: string,
      title: string,
      origin?: string | null,
      year?: number | null,
      rating?: number | null,
      categoryID: string,
      more?:  {
        __typename: "ModelMoreConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};

export type OnDeleteMoreSubscriptionVariables = {
  owner?: string,
};

export type OnDeleteMoreSubscription = {
  onDeleteMore?:  {
    __typename: "More",
    id: string,
    name?: string | null,
    front?: string | null,
    back?: string | null,
    sell?: string | null,
    poster?: string | null,
    wineID: string,
    wine?:  {
      __typename: "Wine",
      id: string,
      title: string,
      origin?: string | null,
      year?: number | null,
      rating?: number | null,
      categoryID: string,
      more?:  {
        __typename: "ModelMoreConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
      owner?: string | null,
    } | null,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
    owner?: string | null,
  } | null,
};
