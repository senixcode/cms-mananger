import { gql } from "apollo-boost";
export const ADD_ROUTE = gql`
  mutation add($input: CreateRouteInput!) {
    createRoute(createRouteInput: $input) {
      id
    }
  }
`;

export const UPDATE_ROUTE = gql`
  mutation update($input: UpdateRouteInput!) {
    updateRoute(updateRouteInput: $input) {
      id
    }
  }
`;

export const DELETE_ROUTE = gql`
  mutation delete($id: Int!) {
    removeRoute(id: $id) {
      id
    }
  }
`;
