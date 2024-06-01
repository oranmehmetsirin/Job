import { v4 } from "uuid";
import AutoInput from "../components/Autolnput";
import Button from "../components/Button";
import Select from "../components/Select";
import { statusOpt, typeOpt } from "../utils/constants";
import api from "../utils/api";
import { useNavigate } from "react-router-dom";
import { createJob } from "../redux/slices/jobSlice";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const AddJob = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const newJob = Object.fromEntries(formData.entries());

    newJob.id = v4();
    newJob.date = Date.now();

    api
      .post("/jobs", newJob)
      .then(() => {
        dispatch(createJob(newJob));
        toast.success("New application added.");
        navigate("/");
        })
      .catch(() => toast.error("Something went wrong."));
  };

  return (
    <div className="add-page">
      <section className="container">
        <h2>Add New job</h2>
        <form onSubmit={handleSubmit}>
          <AutoInput label="Position" name="Position" />
          <AutoInput label="Location" name="Location" />

          <AutoInput label="Company" name="Company" />

          <Select label="Status" name="Status" options={statusOpt} />
          <Select label="Type" name="Type" options={typeOpt} />

          <div>
            <Button text="Create" />
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddJob;
