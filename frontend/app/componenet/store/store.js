import { configureStore } from "@reduxjs/toolkit";

import yearReducer from "./countAction";

export const store = configureStore({
  reducer: {
    year: yearReducer,
  },
});
