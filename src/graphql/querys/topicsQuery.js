import { gql } from "apollo-boost";
export const GET_TOPICS = gql`
  {
    topics {
      id
      name
    }
  }
`;
