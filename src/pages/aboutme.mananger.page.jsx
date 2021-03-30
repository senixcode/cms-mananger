import { Form } from "../componentes/containers/Form";
import { Table } from "../componentes/containers/Table";
const example = [
{ name: "test", language: "en" },
{ name: "prueba", language: "es" },
];
export const AboutMeManangerPage = () => {

 
  return (
    <div className="card mt-3">
      <div className="card-header">AboutMe Mananger</div>
      <div className="card-body">
        <Form />
        <Table items={example}/>
      </div>
    </div>
  );
};
