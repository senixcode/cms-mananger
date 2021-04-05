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
export const GET_LINKS_SELECT = gql`
  {
    links {
      value: id
      label: href
    }
  }
`;
