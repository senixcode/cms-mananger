import { Select } from "../atoms/Select";

export const InputSwitch = ({ element }) => {
  switch (element.type) {
    case types.TEXT:
      return (
        <input
          type="text"
          className="form-control"
          name={element.name}
          placeholder={element.name}
        />
      );
    case types.TEXTAREA:
      return (
        <textarea
          className="form-control"
          name={element.name}
          placeholder={element.name}
        />
      );
    case types.SELECT:
      return <Select name={element.name} options={element.options} />;
    // case types.MULTISELEC:
    //   return <Select name={element.name} options={element.options} />;
    default:
      break;
  }
};

export const types = {
  TEXT:"text",
  TEXTAREA:"textarea",
  SELECT:"select",
  // MULTISELEC:"multiselect"
}