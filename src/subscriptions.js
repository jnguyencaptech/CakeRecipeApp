/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCakeRecipe = /* GraphQL */ `
  subscription OnCreateCakeRecipe(
    $filter: ModelSubscriptionCakeRecipeFilterInput
  ) {
    onCreateCakeRecipe(filter: $filter) {
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
export const onUpdateCakeRecipe = /* GraphQL */ `
  subscription OnUpdateCakeRecipe(
    $filter: ModelSubscriptionCakeRecipeFilterInput
  ) {
    onUpdateCakeRecipe(filter: $filter) {
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
export const onDeleteCakeRecipe = /* GraphQL */ `
  subscription OnDeleteCakeRecipe(
    $filter: ModelSubscriptionCakeRecipeFilterInput
  ) {
    onDeleteCakeRecipe(filter: $filter) {
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
