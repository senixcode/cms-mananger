import { gql } from "apollo-boost";
export const ADD_TOPIC = gql`
  mutation add($input: CreateTopicInput!) {
    createTopic(createTopicInput: $input) {
      id
    }
  }
`;

export const UPDATE_TOPIC = gql`
  mutation update($input: UpdateTopicInput!) {
    updateTopic(updateTopicInput: $input) {
      id
    }
  }
`;

export const DELETE_TOPIC = gql`
  mutation delete($id: Int!) {
    removeTopic(id: $id) {
      id
    }
  }
`;
