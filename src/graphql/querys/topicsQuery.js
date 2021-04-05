import { gql } from "apollo-boost";
export const GET_TOPICS = gql`
  {
    topics {
      id
      name
    }
  }
`;
export const GET_TOPICS_SELECT = gql`
  {
    topics {
      value: id
      label: name
    }
  }
`;
