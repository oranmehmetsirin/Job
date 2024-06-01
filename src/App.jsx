import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddJob from "./pages/AddJob";
import JobList from "./pages/JobList";
import Header from "./components/Header";
import { useEffect } from "react";
import api from "./utils/api";
import { setError, setJobs, setLoading } from "./redux/slices/jobSlice";
import { useDispatch } from "react-redux";

const App = () => {
  const dispatch = useDispatch();

  const getData = () => {
    dispatch(setLoading());

    api
      .get("/jobs")
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<JobList retry={getData} />} />
        <Route path="/new" element={<AddJob />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
