import { useRef, useState } from "react";
import { MultiSelect } from "../componentes/molecules/MultiSelect";

const data = [
  {
    value: 1,
    label: "docker",
  },
  {
    value: 2,
    label: "figma",
  },
  {
    value: 3,
    label: "git",
  },
  {
    value: 4,
    label: "nest",
  },
  {
    value: 5,
    label: "ts",
  },
  {
    value: 6,
    label: "react",
  },
];
export const TestPage = () => {
  // set value for default selection
  const [selectedValue, setSelectedValue] = useState([]);
  const formRef = useRef();
  const handleEdit = () => {
    setSelectedValue([5, 6]);
  };
  return (
    <div className="App">
      <form ref={formRef}>
        <MultiSelect data={data} state={{ selectedValue, setSelectedValue }} />
      </form>

      {selectedValue && (
        <div style={{ marginTop: 20, lineHeight: "25px" }}>
          <div>
            <b>Selected Value: </b> {JSON.stringify(selectedValue, null, 2)}
          </div>
        </div>
      )}
      <button className="btn btn-primary" onClick={handleEdit}>
        Edit
      </button>
    </div>
  );
};
