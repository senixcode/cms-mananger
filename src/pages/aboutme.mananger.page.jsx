import { useQuery } from "@apollo/react-hooks";
import { ManangerTemplate } from "../componentes/template/Mananger";
import { GET_ABOUTME } from "../graphql/querys/aboutMeQuery";
const title = "AboutMe Mananger";

const formExample = [
  { type: "textarea", name: "name" },
  {
    type: "select",
    name: "language",
    options: [
      { value: "EN", name: "en" },
      { value: "ES", name: "es" },
    ],
  },
];

export const AboutMeManangerPage = () => {
  const { error, loading, data } = useQuery(GET_ABOUTME, PARAM);
  if (error) return <p>Error get aboutme graphql</p>;
  if (loading) return <p>Loading aboutme graphql...</p>;
  return (
    <ManangerTemplate
      title={title}
      form={formExample}
      table={data.allAboutMe}
    />
  );
};

const PARAM = {
  variables: { param: null },
};
