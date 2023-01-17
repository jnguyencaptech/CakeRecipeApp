/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { CakeRecipe } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CakeRecipeUpdateFormInputValues = {
    recipeOwner?: string;
    ownerEmail?: string;
    recipeName?: string;
    ingredients?: string;
    description?: string;
};
export declare type CakeRecipeUpdateFormValidationValues = {
    recipeOwner?: ValidationFunction<string>;
    ownerEmail?: ValidationFunction<string>;
    recipeName?: ValidationFunction<string>;
    ingredients?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CakeRecipeUpdateFormOverridesProps = {
    CakeRecipeUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    recipeOwner?: PrimitiveOverrideProps<TextFieldProps>;
    ownerEmail?: PrimitiveOverrideProps<TextFieldProps>;
    recipeName?: PrimitiveOverrideProps<TextFieldProps>;
    ingredients?: PrimitiveOverrideProps<TextAreaFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CakeRecipeUpdateFormProps = React.PropsWithChildren<{
    overrides?: CakeRecipeUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    cakeRecipe?: CakeRecipe;
    onSubmit?: (fields: CakeRecipeUpdateFormInputValues) => CakeRecipeUpdateFormInputValues;
    onSuccess?: (fields: CakeRecipeUpdateFormInputValues) => void;
    onError?: (fields: CakeRecipeUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CakeRecipeUpdateFormInputValues) => CakeRecipeUpdateFormInputValues;
    onValidate?: CakeRecipeUpdateFormValidationValues;
} & React.CSSProperties>;
export default function CakeRecipeUpdateForm(props: CakeRecipeUpdateFormProps): React.ReactElement;
