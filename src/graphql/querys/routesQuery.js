import { gql } from "apollo-boost";
export const GET_ROUTES = gql`
  query findLanguage($param: Language, $all: Boolean = true) {
    routes: routeFindByLanguage(language: $param, all: $all) {
      id
      path
      title
      description
      language
    }
  }
`;
