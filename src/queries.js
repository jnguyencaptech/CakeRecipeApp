/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCakeRecipe = /* GraphQL */ `
  query GetCakeRecipe($id: ID!) {
    getCakeRecipe(id: $id) {
      id
      recipeOwner
      ownerEmail
      recipeName
      ingredients
      description
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const listCakeRecipes = /* GraphQL */ `
  query ListCakeRecipes(
    $filter: ModelCakeRecipeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCakeRecipes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      nextToken
      startedAt
    }
  }
`;
export const syncCakeRecipes = /* GraphQL */ `
  query SyncCakeRecipes(
    $filter: ModelCakeRecipeFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCakeRecipes(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      nextToken
      startedAt
    }
  }
`;
