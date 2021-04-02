import { gql } from "apollo-boost";
export const ADD_LINK = gql`
  mutation add($input: CreateLinkInput!) {
    createLink(createLinkInput: $input) {
      id
    }
  }
`;

export const UPDATE_LINK = gql`
  mutation update($input: UpdateLinkInput!) {
    updateLink(updateLinkInput: $input) {
      id
    }
  }
`;

export const DELETE_LINK = gql`
  mutation delete($id: Int!) {
    removeLink(id: $id) {
      id
    }
  }
`;
