import { Select } from "../atoms/Select";

export const InputSwitch = ({ element }) => {
  switch (element.type) {
    case "textarea":
      return (
        <textarea
          className="form-control"
          name={element.name}
          placeholder={element.name}
        />
      );
    case "select":
      return <Select name={element.name} options={element.options} />;
    default:
      break;
  }
};
