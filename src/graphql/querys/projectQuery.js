import { PROJECT_FIELDS } from "../fragments/projectFields";
import { gql } from "apollo-boost";
export const GET_PROJECTS = gql`
  ${PROJECT_FIELDS}
  query findLanguage($param: Language, $all: Boolean = true) {
    projects: projectFinByLanguage(language: $param, all: $all) {
      ...project_data
    }
  }
`;

export const GET_PROJECTS_TEST = gql`
  {
    projects {
      id
      title
      titleSeo
      summary
      description
      language
    }
  }
`;
