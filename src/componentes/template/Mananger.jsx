import { Form } from "../containers/Form";
import { Table } from "../containers/Table";

export const ManangerTemplate = ({ title, form, table }) => {
  const { handleSubmit, edit, setEdit, inputs } = form;
  const { items, hideItems, handleEdit, handleDelete } = table;
  return (
    <div className="card mt-3">
      <div className="card-header">{title}</div>
      <div className="card-body">
        <Form
          inputs={inputs}
          edit={edit}
          setEdit={setEdit}
          handleSubmit={handleSubmit}
        />
        <Table
          items={items}
          hideItems={hideItems}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>
    </div>
  );
};
