/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const syncCategories = /* GraphQL */ `
  query SyncCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCategories(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        title
        poster
        wines {
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
      nextToken
      startedAt
    }
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategorys = /* GraphQL */ `
  query ListCategorys(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategorys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        poster
        wines {
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
      nextToken
      startedAt
    }
  }
`;
export const syncWines = /* GraphQL */ `
  query SyncWines(
    $filter: ModelWineFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncWines(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getWine = /* GraphQL */ `
  query GetWine($id: ID!) {
    getWine(id: $id) {
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
export const listWines = /* GraphQL */ `
  query ListWines(
    $filter: ModelWineFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listWines(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncMores = /* GraphQL */ `
  query SyncMores(
    $filter: ModelMoreFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncMores(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getMore = /* GraphQL */ `
  query GetMore($id: ID!) {
    getMore(id: $id) {
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
export const listMores = /* GraphQL */ `
  query ListMores(
    $filter: ModelMoreFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMores(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
