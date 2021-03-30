import { useRef } from "react";
import { isNotEmptyArray } from "../helpers/isNotEmptyArray";
import { InputSwitch } from "../molecules/InputSwitch";

export const Form = ({ inputs }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    inputs.map((input) =>
      console.log({ [input.name]: formRef.current[input.name].value })
    );
    formRef.current.reset();
  };

  return (
    <form className="w-4" ref={formRef}>
      <Inputs elements={inputs} />
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
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
