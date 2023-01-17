/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCakeRecipe = /* GraphQL */ `
  mutation CreateCakeRecipe(
    $input: CreateCakeRecipeInput!
    $condition: ModelCakeRecipeConditionInput
  ) {
    createCakeRecipe(input: $input, condition: $condition) {
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
export const updateCakeRecipe = /* GraphQL */ `
  mutation UpdateCakeRecipe(
    $input: UpdateCakeRecipeInput!
    $condition: ModelCakeRecipeConditionInput
  ) {
    updateCakeRecipe(input: $input, condition: $condition) {
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
export const deleteCakeRecipe = /* GraphQL */ `
  mutation DeleteCakeRecipe(
    $input: DeleteCakeRecipeInput!
    $condition: ModelCakeRecipeConditionInput
  ) {
    deleteCakeRecipe(input: $input, condition: $condition) {
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
