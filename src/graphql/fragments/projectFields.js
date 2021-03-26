import {gql} from "apollo-boost"
export const PROJECT_FIELDS = gql`
fragment project_data on Project{
    id
    title
    titleSeo
    summary
    descriptionParse
    topicsParse {
      id
      name
    }
    linksParse {
      id
      name
      href
    }
    language
}
`