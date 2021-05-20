/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($owner: String!) {
    onCreateCategory(owner: $owner) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($owner: String!) {
    onUpdateCategory(owner: $owner) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($owner: String!) {
    onDeleteCategory(owner: $owner) {
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
export const onCreateWine = /* GraphQL */ `
  subscription OnCreateWine($owner: String!) {
    onCreateWine(owner: $owner) {
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
export const onUpdateWine = /* GraphQL */ `
  subscription OnUpdateWine($owner: String!) {
    onUpdateWine(owner: $owner) {
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
export const onDeleteWine = /* GraphQL */ `
  subscription OnDeleteWine($owner: String!) {
    onDeleteWine(owner: $owner) {
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
export const onCreateMore = /* GraphQL */ `
  subscription OnCreateMore($owner: String!) {
    onCreateMore(owner: $owner) {
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
export const onUpdateMore = /* GraphQL */ `
  subscription OnUpdateMore($owner: String!) {
    onUpdateMore(owner: $owner) {
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
export const onDeleteMore = /* GraphQL */ `
  subscription OnDeleteMore($owner: String!) {
    onDeleteMore(owner: $owner) {
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
