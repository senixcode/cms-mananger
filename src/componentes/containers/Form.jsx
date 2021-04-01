import { useEffect, useRef } from "react";
import { forEachObject } from "../helpers/forEachObject";
import { isNotEmptyArray } from "../helpers/isNotEmptyArray";
import { InputSwitch } from "../molecules/InputSwitch";

export const Form = ({ inputs, handleSubmit, edit, setEdit }) => {
  const formRef = useRef();
  useEffect(() => {
    if (edit.state) {
      forEachObject(
        edit.data,
        (key) => (formRef.current[key].value = edit.data[key])
      );
      setEdit({ state: false, ...edit.data});
    }
  }, [edit, setEdit]);
  return (
    <form className="w-4" ref={formRef}>
      <Inputs elements={inputs} />
      <button
        type="submit"
        className="btn btn-primary"
        onClick={(e) => handleSubmit(e, formRef)}
      >
        Save
      </button>
    </form>
  );
};

const Inputs = ({ elements }) => (
  <>
    {isNotEmptyArray(elements) ? (
      elements.map((element, i) => (
        <div key={i} className="mb-3">
          <InputSwitch element={element} />
        </div>
      ))
    ) : (
      <p>Error element form</p>
    )}
  </>
);

export const forEachFormRef = (inputs, formRef, f) => {
  inputs.forEach((i) => {
    let key = i.name;
    let value = formRef.current[key].value;
    return f(key, value);
  });
};
