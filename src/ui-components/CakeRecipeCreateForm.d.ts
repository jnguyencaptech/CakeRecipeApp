/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type CakeRecipeCreateFormInputValues = {
    recipeOwner?: string;
    ownerEmail?: string;
    recipeName?: string;
    ingredients?: string;
    description?: string;
};
export declare type CakeRecipeCreateFormValidationValues = {
    recipeOwner?: ValidationFunction<string>;
    ownerEmail?: ValidationFunction<string>;
    recipeName?: ValidationFunction<string>;
    ingredients?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type CakeRecipeCreateFormOverridesProps = {
    CakeRecipeCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    recipeOwner?: PrimitiveOverrideProps<TextFieldProps>;
    ownerEmail?: PrimitiveOverrideProps<TextFieldProps>;
    recipeName?: PrimitiveOverrideProps<TextFieldProps>;
    ingredients?: PrimitiveOverrideProps<TextAreaFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type CakeRecipeCreateFormProps = React.PropsWithChildren<{
    overrides?: CakeRecipeCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: CakeRecipeCreateFormInputValues) => CakeRecipeCreateFormInputValues;
    onSuccess?: (fields: CakeRecipeCreateFormInputValues) => void;
    onError?: (fields: CakeRecipeCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: CakeRecipeCreateFormInputValues) => CakeRecipeCreateFormInputValues;
    onValidate?: CakeRecipeCreateFormValidationValues;
} & React.CSSProperties>;
export default function CakeRecipeCreateForm(props: CakeRecipeCreateFormProps): React.ReactElement;
