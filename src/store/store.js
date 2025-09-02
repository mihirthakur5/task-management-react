import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/taskSlice";

const store = configureStore({
  reducer: {
    todo: todoReducer,
  },
});

export default store;
