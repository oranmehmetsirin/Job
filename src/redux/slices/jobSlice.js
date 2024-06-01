import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: false,
  jobs: [],
};

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },

    setError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },

    setJobs: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.jobs = payload;
    },

    deleteJob: (state, { payload }) => {
      // silincek elemanın sırasını bul
      const index = state.jobs.findIndex((i) => i.id === payload);

      // sırası bilinen elemanı diziden kaldır
      state.jobs.splice(index, 1);
    },

    createJob: (state, { payload }) => {
      state.jobs.push(payload);
    },
  },
});

export default jobSlice.reducer;

export const { setError, setJobs, setLoading, deleteJob, createJob } =
  jobSlice.actions;
