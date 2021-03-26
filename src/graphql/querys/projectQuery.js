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
