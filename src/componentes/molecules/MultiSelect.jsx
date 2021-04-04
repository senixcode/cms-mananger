import Select from 'react-select';

export const MultiSelect = ({data, state}) => {
    const {selectedValue, setSelectedValue} = state
  // set value for default selection
  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(Array.isArray(e) ? e.map((x) => x.value) : []);
  };
   
  return (
      <Select
        className="dropdown"
        placeholder="Select Option"
        value={data.filter((obj) => selectedValue.includes(obj.value))} // set selected values
        options={data} // set list of the data
        onChange={handleChange} // assign onChange function
        isMulti
        isClearable
      />
  );
};