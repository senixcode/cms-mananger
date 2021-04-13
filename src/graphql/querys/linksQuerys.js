import { gql } from "apollo-boost";
export const GET_LINKS = gql`
  {
    links {
      id
      name
      href
      icon
      category
    }
  }
`;
export const GET_LINKS_SELECT = gql`
  {
    links {
      value: id
      label: hrefCategory
    }
  }
`;
