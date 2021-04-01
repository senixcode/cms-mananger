import { Form } from "../containers/Form";
import { Table } from "../containers/Table";

export const ManangerTemplate = ({title,form,table}) => {
  const {handleSubmit, edit, setEdit, inputs} = form
  const {handleEdit, items} = table
  return(
  <div className="card mt-3">
    <div className="card-header">{title}</div>
    <div className="card-body">
      <Form inputs={inputs} edit={edit} setEdit={setEdit} handleSubmit={handleSubmit}/>
      <Table items={items} handleEdit={handleEdit}/>
    </div>
  </div>
)};
