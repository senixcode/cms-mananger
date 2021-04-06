import { forEachObject } from "../helpers/forEachObject";
import { isNotEmptyArray } from "../helpers/isNotEmptyArray";

export const Table = ({ items, handleEdit, handleDelete, hideItems = ["__typename"] }) => (
  <table className="table mt-3 text-center">
    <thead>
      <tr>
        <Header items={items} hideItems={hideItems} />
      </tr>
    </thead>
    <tbody>
      <Body
        items={items}
        hideItems={hideItems}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </tbody>
  </table>
);

const Header = ({ items, hideItems }) => (
  <>
    {isNotEmptyArray(items) ? (
      <>
        {forEachObject(
          items[0],
          (key, index) =>
            !hideItems.includes(key) && (
              <th key={index} scope="col">
                {key}
              </th>
            )
        )}
        <th scope="col">options</th>
      </>
    ) : (
      <p> Error table header</p>
    )}
  </>
);

const Body = ({ items, hideItems, handleEdit, handleDelete }) => {
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
      {forEachObject(
        columns,
        (key, i) => !hideItems.includes(key) && <td key={i}>{row[key]}</td>
      )}
    </>
  );

  const Optiones = ({ row }) => (
    <td>
      <button
        type="button"
        className="btn btn-warning btn-sm mr-2"
        onClick={() => handleEdit(row)}
      >
        Edit
      </button>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => handleDelete(row)}
      >
        Delete
      </button>
    </td>
  );

  return (
    <>
      {isNotEmptyArray(items) ? (
        <Rows items={items} />
      ) : (
        <p> Error table body</p>
      )}
    </>
  );
};
