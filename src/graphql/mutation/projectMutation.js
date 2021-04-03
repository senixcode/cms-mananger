import { gql } from "apollo-boost";
export const ADD_PROJECT = gql`
  mutation add($input: CreateProjectInput!) {
    createProject(createProjectInput: $input) {
      id
    }
  }
`;

export const UPDATE_PROJECT = gql`
  mutation update($input: UpdateProjectInput!) {
    updateProject(updateProjectInput: $input) {
      id
    }
  }
`;

export const DELETE_PROJECT = gql`
  mutation delete($id: Int!) {
    removeProject(id: $id) {
      id
    }
  }
`;
