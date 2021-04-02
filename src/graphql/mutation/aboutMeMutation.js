import { gql } from "apollo-boost";
export const ADD_ABOUTME = gql`
  mutation add($input: CreateAboutmeInput!) {
    createAboutme(createAboutmeInput: $input) {
      id
      name
      language
    }
  }
`;

export const UPDATE_ABOUTME = gql`
  mutation update($input: UpdateAboutmeInput!) {
    updateAboutme(updateAboutmeInput: $input) {
      id
    }
  }
`;
