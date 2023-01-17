import { API, graphqlOperation } from "aws-amplify";
import * as queries from "../queries";
import * as mutations from "../mutations";

const cakeRecipeExample = {
  id: 1,
  recipeOwner: "Justin",
  ownerEmail: "test@email.com",
  recipeName: "testRecipe",
  ingredients: { ingredient1: "eggs", ingredient2: "bacon" },
  description: "This is a recipe about ...",
};

async function createRecipe(cakeRecipe) {
  await API.graphql(
    graphqlOperation(mutations.createCakeRecipe, { input: cakeRecipe })
  );
}

async function updateRecipe(cakeRecipe) {
  await API.graphql(
    graphqlOperation(mutations.updateCakeRecipe, {
      input: cakeRecipe,
    })
  );
}

async function deleteRecipe(cakeRecipe) {
  await API.graphql(
    graphqlOperation(mutations.deleteCakeRecipe, {
      input: { id: cakeRecipe.id },
    })
  );
}
export async function queryRecipe(idNum) {
  await API.graphql({
    query: queries.getCakeRecipe,
    variables: { id: idNum },
  });
}
