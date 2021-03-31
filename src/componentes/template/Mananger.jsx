import { Form } from "../containers/Form";
import { Table } from "../containers/Table";

export const ManangerTemplate = ({title,form,table}) => (
  <div className="card mt-3">
    <div className="card-header">{title}</div>
    <div className="card-body">
      <Form inputs={form} />
      <Table items={table} />
    </div>
  </div>
);
