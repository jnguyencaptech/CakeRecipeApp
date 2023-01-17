import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type CakeRecipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerCakeRecipe = {
  readonly id: string;
  readonly recipeOwner?: string | null;
  readonly ownerEmail?: string | null;
  readonly recipeName?: string | null;
  readonly ingredients?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCakeRecipe = {
  readonly id: string;
  readonly recipeOwner?: string | null;
  readonly ownerEmail?: string | null;
  readonly recipeName?: string | null;
  readonly ingredients?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type CakeRecipe = LazyLoading extends LazyLoadingDisabled ? EagerCakeRecipe : LazyCakeRecipe

export declare const CakeRecipe: (new (init: ModelInit<CakeRecipe, CakeRecipeMetaData>) => CakeRecipe) & {
  copyOf(source: CakeRecipe, mutator: (draft: MutableModel<CakeRecipe, CakeRecipeMetaData>) => MutableModel<CakeRecipe, CakeRecipeMetaData> | void): CakeRecipe;
}