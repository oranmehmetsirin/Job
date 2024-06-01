const Select = ({ label, options, name, fn }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <select name={name} id={name} onChange={fn} defaultValue={""} required>
        <option value={""}>Select</option>
        {options.map((i) => (
          <option key={i} value={i}>
            {i}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
