import { createSlice } from "@reduxjs/toolkit";

// this works like a schema
const initialState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      // this will return an plain object which will be pure function
      state.count = state.count + action.payload;
    },
    decrement: (state, action) => {
      state.count = state.count - action.payload;
    },
  },
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
