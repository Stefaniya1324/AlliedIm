/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      title
      poster
      wines {
        items {
          id
          title
          origin
          year
          rating
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      title
      poster
      wines {
        items {
          id
          title
          origin
          year
          rating
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      title
      poster
      wines {
        items {
          id
          title
          origin
          year
          rating
          categoryID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createWine = /* GraphQL */ `
  mutation CreateWine(
    $input: CreateWineInput!
    $condition: ModelWineConditionInput
  ) {
    createWine(input: $input, condition: $condition) {
      id
      title
      origin
      year
      rating
      categoryID
      more {
        items {
          id
          name
          front
          back
          sell
          poster
          wineID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateWine = /* GraphQL */ `
  mutation UpdateWine(
    $input: UpdateWineInput!
    $condition: ModelWineConditionInput
  ) {
    updateWine(input: $input, condition: $condition) {
      id
      title
      origin
      year
      rating
      categoryID
      more {
        items {
          id
          name
          front
          back
          sell
          poster
          wineID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteWine = /* GraphQL */ `
  mutation DeleteWine(
    $input: DeleteWineInput!
    $condition: ModelWineConditionInput
  ) {
    deleteWine(input: $input, condition: $condition) {
      id
      title
      origin
      year
      rating
      categoryID
      more {
        items {
          id
          name
          front
          back
          sell
          poster
          wineID
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        nextToken
        startedAt
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMore = /* GraphQL */ `
  mutation CreateMore(
    $input: CreateMoreInput!
    $condition: ModelMoreConditionInput
  ) {
    createMore(input: $input, condition: $condition) {
      id
      name
      front
      back
      sell
      poster
      wineID
      wine {
        id
        title
        origin
        year
        rating
        categoryID
        more {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateMore = /* GraphQL */ `
  mutation UpdateMore(
    $input: UpdateMoreInput!
    $condition: ModelMoreConditionInput
  ) {
    updateMore(input: $input, condition: $condition) {
      id
      name
      front
      back
      sell
      poster
      wineID
      wine {
        id
        title
        origin
        year
        rating
        categoryID
        more {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteMore = /* GraphQL */ `
  mutation DeleteMore(
    $input: DeleteMoreInput!
    $condition: ModelMoreConditionInput
  ) {
    deleteMore(input: $input, condition: $condition) {
      id
      name
      front
      back
      sell
      poster
      wineID
      wine {
        id
        title
        origin
        year
        rating
        categoryID
        more {
          nextToken
          startedAt
        }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
    }
  }
`;
