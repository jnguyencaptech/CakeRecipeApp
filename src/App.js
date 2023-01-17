import logo from "./logo.svg";
import "./App.css";
import { Amplify, API, graphqlOperation } from "aws-amplify";
import { CakeRecipeCreateForm, CakeRecipeUpdateForm } from "./ui-components";
import awsconfig from "./aws-exports";
import { queryRecipe } from "./recipeHelper/api";
Amplify.configure(awsconfig);

function App() {
  return (
    <>
      <div className='RecipeApp'>
        <h1>Input Form</h1>
        <CakeRecipeCreateForm />
      </div>
      <div className='RecipeApps'>
        <h1>Update Form</h1>
        <CakeRecipeUpdateForm CakeRecipe={queryRecipe(0)} />
      </div>
    </>
  );
}

export default App;
