import { configureStore } from "@reduxjs/toolkit";
import job from "./slices/jobSlice";

export default configureStore({ reducer: { job } });
