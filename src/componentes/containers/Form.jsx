import { useRef } from "react";

export const Form = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formRef.current.name.value);
      console.log(formRef.current.language.value);
      formRef.current.reset();
  };

  return (
    <form className="w-4" ref={formRef}>
      <div className="mb-3">
        <textarea className="form-control" name="name" placeholder="name" />
      </div>
      <div className="mb-3">
        <select
          className="form-control"
          placeholder="language"
          name="language"
        >
          <option value="EN">en</option>
          <option value="ES">es</option>
        </select>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
        Save
      </button>
    </form>
  );
};
