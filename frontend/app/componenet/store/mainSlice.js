import { createSlice } from "@reduxjs/toolkit";

const initialMain = {
  name: "",
};

export const main = createSlice({
  name: "main",
  initialState: initialMain,

  reducers: {
    changeName(state, action) {
      state.name = action.payload;
    },
  },
});

export const { changeName } = main.actions;
export default main.reducer;
