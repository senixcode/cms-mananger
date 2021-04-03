export const SwitchCustome = ({name, checked, onChange}) => (
    <div className="custom-control custom-switch">
      <input
        className="custom-control-input"
        type="checkbox"
        id={name}
        checked={checked}
        onChange={onChange}
      />
      <label className="custom-control-label" htmlFor={name}>
        {name}
      </label>
    </div>
)