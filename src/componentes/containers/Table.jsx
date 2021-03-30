import { isNotEmptyArray } from "../helpers/isNotEmptyArray";

export const Table = ({ items }) => (
  <table className="table mt-3">
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
const forEachObject = (object, f) =>
  Object.keys(object).map((key, index) => f(key, index));

const Header = ({ items }) => (
  <>
    {isNotEmptyArray(items) ? (
      forEachObject(items[0], (key, index) => (
        <th key={index} scope="col">
          {key}
        </th>
      ))
    ) : (
      <p> Error table header</p>
    )}
  </>
);

const Body = ({ items }) => (
  <>
    {isNotEmptyArray(items) ? (
      items.map((row, index) => (
        <tr key={index}>
          {forEachObject(items[0], (key, i) => (
            <td key={i}>{row[key]}</td>
          ))}
        </tr>
      ))
    ) : (
      <p> Error table body</p>
    )}
  </>
);
