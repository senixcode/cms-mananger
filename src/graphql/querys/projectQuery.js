import { PROJECT_FIELDS } from "../fragments/projectFields";
import { gql } from "apollo-boost";
export const GET_PROJECTS = gql`
  ${PROJECT_FIELDS}
  {
    projects {
      ...project_data
    }
  }
`;

export const GET_PROJECTS_LANGUAGE = gql`
  ${PROJECT_FIELDS}
  query finByLanguage($language: Language = ES) {
    projectFinByLanguage(language: $language) {
      ...project_data
    }
  }
`;
