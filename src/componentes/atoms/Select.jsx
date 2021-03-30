import { isNotEmptyArray } from "../helpers/isNotEmptyArray";

export const Select = ({ name, options }) => (
  <select className="form-control" placeholder={name} name={name}>
    <Options options={options} />
  </select>
);

const Options = ({ options }) => (
  <>
    {isNotEmptyArray(options) ? (
      options.map((option, i) => (
        <option key={i} value={option.value}>{option.name}</option>
      ))
    ) : (
      <p>Error options</p>
    )}
  </>
);
