import { forEachObject } from "../helpers/forEachObject";
import { isNotEmptyArray } from "../helpers/isNotEmptyArray";

export const Table = ({ items, handleEdit }) => (
  <table className="table mt-3 text-center">
    <thead>
      <tr>
        <Header items={items} />
      </tr>
    </thead>
    <tbody>
      <Body items={items} handleEdit={handleEdit}/>
    </tbody>
  </table>
);

const Header = ({ items }) => (
  <>
    {isNotEmptyArray(items) ? (
      <>
        {forEachObject(items[0], (key, index) => (
          <th key={index} scope="col">
            {key}
          </th>
        ))}
        <th scope="col">options</th>
      </>
    ) : (
      <p> Error table header</p>
    )}
  </>
);

const Body = ({ items, handleEdit }) => {

  const Rows = ({ items }) => (
    <>
      {items.map((row, index) => (
        <tr key={index}>
          <Row columns={items[0]} row={row} />
          <Optiones row={row} />
        </tr>
      ))}
    </>
  );
  
  const Row = ({ columns, row }) => (
    <>
      {forEachObject(columns, (key, i) => (
        <td key={i}>{row[key]}</td>
      ))}
    </>
  );
  
  const Optiones = ({row}) => (
    <td>
      <button type="button" className="btn btn-warning mr-2" onClick={() => handleEdit(row)}  >
        Edit
      </button>
      <button type="button" className="btn btn-danger">
        Delete
      </button>
    </td>
  );

  return(
  <>
    {isNotEmptyArray(items) ? <Rows items={items} /> : <p> Error table body</p>}
  </>
)};

