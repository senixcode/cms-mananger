import { gql } from "apollo-boost";
export const GET_LINKS = gql`
  {
    links {
      id
      name
      href
      icon
    }
  }
`;
