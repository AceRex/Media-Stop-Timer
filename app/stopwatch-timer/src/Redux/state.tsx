import { createSlice } from "@reduxjs/toolkit";

const utilSlice = createSlice({
  name: "util",
  initialState: {
    setTime: false,
  },
  reducers: {
    setTimeState: (state, action) => {
      state.setTime = action.payload;
    },
  },
});

export const utilAction = utilSlice.actions;

export default utilSlice;
