import { useSelector } from "react-redux";

const AutoInput = ({ label, name }) => {
  const { jobs } = useSelector((store) => store.job);
  const arr = jobs.map((job) => job[name]);
  const set = new Set(arr);
  const options = Array.from(set);

  return (
    <div>
      <label htmlFor={label}>(label)</label>
      <input type="text" list={name} name={name} id={label} required />

      <datalist id={name}>
        {options.map((item) => (
          <option value={item} />
        ))}
      </datalist>
    </div>
  );
};

export default AutoInput;
