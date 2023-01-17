// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { CakeRecipe } = initSchema(schema);

export {
  CakeRecipe
};