import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: nameReducer,
});

export default store;
