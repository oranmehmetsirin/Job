import React, { useEffect, useState } from "react";
import Select from "./Select";
import { sortOpt, statusOpt, typeOpt } from "./../utils/constants";
import Button from "./Button";
import api from "../utils/api";
import { useDispatch } from "react-redux";
import { setError, setJobs, setLoading } from "../redux/slices/jobSlice";

const Filter = () => {
  const [text, setText] = useState();
  const [debouncedText, setDebouncedText] = useState();
  const [sort, setSort] = useState();
  const [status, setStatus] = useState();
  const [type, setType] = useState();

  const dispatch = useDispatch();

  useEffect(() => {
    if (text === undefined) return;

    const timer = setTimeout(() => setDebouncedText(text), 500);

    return () => clearTimeout(timer);
  }, [text]);

  useEffect(() => {
    const sortP =
      sort === "a-z" || sort === "z-a"
        ? "company"
        : sort === "Newest" || sort === "Oldest"
        ? "date"
        : undefined;

    const orderP =
      sort === "a-z" || sort === "Oldest"
        ? "asc"
        : sort === "z-a" || sort === "Newest"
        ? "desc"
        : undefined;

    const params = {
      q: debouncedText,
      status: status || undefined,
      type: type || undefined,
      _sort: sortP,
      _order: orderP,
    };

    dispatch(setLoading());

    api
      .get("/jobs", { params })
      .then((res) => dispatch(setJobs(res.data)))
      .catch((err) => dispatch(setError(err.message)));
  }, [debouncedText, status, sort, type]);

  const handleReset = () => {
    setDebouncedText();
    setText();
    setType();
    setStatus();
    setSort();
  };

  return (
    <div className="filter-sec">
      <h2>Filter Form</h2>

      <form onReset={handleReset}>
        <div>
          <label>Search</label>
          <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
        <Select
          label="Kind"
          options={statusOpt}
          fn={(e) => setStatus(e.target.value)}
        />
        <Select
          label="Kind"
          options={typeOpt}
          fn={(e) => setStatus(e.target.value)}
        />
        <Select
          label="Kind"
          options={sortOpt}
          fn={(e) => setStatus(e.target.value)}
        />

        <Button type="reset" text="Reset Filters" />
      </form>
    </div>
  );
};

export default Filter;
