import { gql } from "apollo-boost";
export const GET_ROUTES = gql`
  {
    routes {
      id
      path
      title
      description
      language
    }
  }
`;
