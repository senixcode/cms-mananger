import { gql } from "apollo-boost";
export const GET_ABOUTME = gql`
  query findLanguage($param: Language, $all: Boolean = true) {
    allAboutMe:aboutMeFindByLanguage(language: $param, all: $all) {
      id
      name
      language
    }
  }
`;
