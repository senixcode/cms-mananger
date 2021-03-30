import { Form } from "../componentes/containers/Form";
import { Table } from "../componentes/containers/Table";
const formExample = [
  { type: "textarea", name: "name" },
  //{ type: "textarea", name: "test" },
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
  { name: "test", language: "en" },
  { name: "prueba", language: "es" },
  //{ name: "prueba", language: "es" },
];

export const AboutMeManangerPage = () => (
  <div className="card mt-3">
    <div className="card-header">AboutMe Mananger</div>
    <div className="card-body">
      <Form inputs={formExample} />
      <Table items={dataExample} />
    </div>
  </div>
);
