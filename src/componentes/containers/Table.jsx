import { forEachObject } from "../helpers/forEachObject";
import { isNotEmptyArray } from "../helpers/isNotEmptyArray";

export const Table = ({ items }) => (
  <table className="table mt-3 text-center">
    <thead>
      <tr>
        <Header items={items} />
      </tr>
    </thead>
    <tbody>
      <Body items={items} />
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

const Body = ({ items }) => (
  <>
    {isNotEmptyArray(items) ? <Rows items={items} /> : <p> Error table body</p>}
  </>
);

const Rows = ({ items }) => (
  <>
    {items.map((row, index) => (
      <tr key={index}>
        <Row columns={items[0]} row={row} />
        <Optiones id={row.id} />
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

const Optiones = ({id}) => (
  <td>
    <button type="button" class="btn btn-warning mr-2"  >
      Edit
    </button>
    <button type="button" class="btn btn-danger">
      Delete
    </button>
  </td>
);
