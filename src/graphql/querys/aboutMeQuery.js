import { gql } from "apollo-boost";
export const GET_ABOUTME = gql`
  {
    allAboutMe {
      id
      name
      language
    }
  }
`;