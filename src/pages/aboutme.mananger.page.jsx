import { ManangerTemplate } from "../componentes/template/Mananger";
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

const dataExample = [
  { id:1, name: "test", language: "en" },
  { id:2, name: "prueba", language: "es" },
];

export const AboutMeManangerPage = () => (
  <ManangerTemplate 
    title={title} 
    form={formExample} 
    table={dataExample} 
  />
);
