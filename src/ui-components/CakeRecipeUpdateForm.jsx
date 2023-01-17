/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  TextAreaField,
  TextField,
} from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { CakeRecipe } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function CakeRecipeUpdateForm(props) {
  const {
    id: idProp,
    cakeRecipe,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    recipeOwner: "",
    ownerEmail: "",
    recipeName: "",
    ingredients: "",
    description: "",
  };
  const [recipeOwner, setRecipeOwner] = React.useState(
    initialValues.recipeOwner
  );
  const [ownerEmail, setOwnerEmail] = React.useState(initialValues.ownerEmail);
  const [recipeName, setRecipeName] = React.useState(initialValues.recipeName);
  const [ingredients, setIngredients] = React.useState(
    initialValues.ingredients
  );
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = cakeRecipeRecord
      ? { ...initialValues, ...cakeRecipeRecord }
      : initialValues;
    setRecipeOwner(cleanValues.recipeOwner);
    setOwnerEmail(cleanValues.ownerEmail);
    setRecipeName(cleanValues.recipeName);
    setIngredients(
      typeof cleanValues.ingredients === "string"
        ? cleanValues.ingredients
        : JSON.stringify(cleanValues.ingredients)
    );
    setDescription(cleanValues.description);
    setErrors({});
  };
  const [cakeRecipeRecord, setCakeRecipeRecord] = React.useState(cakeRecipe);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(CakeRecipe, idProp)
        : cakeRecipe;
      setCakeRecipeRecord(record);
    };
    queryData();
  }, [idProp, cakeRecipe]);
  React.useEffect(resetStateValues, [cakeRecipeRecord]);
  const validations = {
    recipeOwner: [],
    ownerEmail: [{ type: "Email" }],
    recipeName: [],
    ingredients: [{ type: "JSON" }],
    description: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value = getDisplayValue
      ? getDisplayValue(currentValue)
      : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          recipeOwner,
          ownerEmail,
          recipeName,
          ingredients,
          description,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(
            CakeRecipe.copyOf(cakeRecipeRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "CakeRecipeUpdateForm")}
      {...rest}
    >
      <TextField
        label="Recipe owner"
        isRequired={false}
        isReadOnly={false}
        value={recipeOwner}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeOwner: value,
              ownerEmail,
              recipeName,
              ingredients,
              description,
            };
            const result = onChange(modelFields);
            value = result?.recipeOwner ?? value;
          }
          if (errors.recipeOwner?.hasError) {
            runValidationTasks("recipeOwner", value);
          }
          setRecipeOwner(value);
        }}
        onBlur={() => runValidationTasks("recipeOwner", recipeOwner)}
        errorMessage={errors.recipeOwner?.errorMessage}
        hasError={errors.recipeOwner?.hasError}
        {...getOverrideProps(overrides, "recipeOwner")}
      ></TextField>
      <TextField
        label="Owner email"
        isRequired={false}
        isReadOnly={false}
        value={ownerEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeOwner,
              ownerEmail: value,
              recipeName,
              ingredients,
              description,
            };
            const result = onChange(modelFields);
            value = result?.ownerEmail ?? value;
          }
          if (errors.ownerEmail?.hasError) {
            runValidationTasks("ownerEmail", value);
          }
          setOwnerEmail(value);
        }}
        onBlur={() => runValidationTasks("ownerEmail", ownerEmail)}
        errorMessage={errors.ownerEmail?.errorMessage}
        hasError={errors.ownerEmail?.hasError}
        {...getOverrideProps(overrides, "ownerEmail")}
      ></TextField>
      <TextField
        label="Recipe name"
        isRequired={false}
        isReadOnly={false}
        value={recipeName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeOwner,
              ownerEmail,
              recipeName: value,
              ingredients,
              description,
            };
            const result = onChange(modelFields);
            value = result?.recipeName ?? value;
          }
          if (errors.recipeName?.hasError) {
            runValidationTasks("recipeName", value);
          }
          setRecipeName(value);
        }}
        onBlur={() => runValidationTasks("recipeName", recipeName)}
        errorMessage={errors.recipeName?.errorMessage}
        hasError={errors.recipeName?.hasError}
        {...getOverrideProps(overrides, "recipeName")}
      ></TextField>
      <TextAreaField
        label="Ingredients"
        isRequired={false}
        isReadOnly={false}
        value={ingredients}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeOwner,
              ownerEmail,
              recipeName,
              ingredients: value,
              description,
            };
            const result = onChange(modelFields);
            value = result?.ingredients ?? value;
          }
          if (errors.ingredients?.hasError) {
            runValidationTasks("ingredients", value);
          }
          setIngredients(value);
        }}
        onBlur={() => runValidationTasks("ingredients", ingredients)}
        errorMessage={errors.ingredients?.errorMessage}
        hasError={errors.ingredients?.hasError}
        {...getOverrideProps(overrides, "ingredients")}
      ></TextAreaField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              recipeOwner,
              ownerEmail,
              recipeName,
              ingredients,
              description: value,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || cakeRecipe)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || cakeRecipe) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
