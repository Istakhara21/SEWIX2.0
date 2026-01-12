import { createSlice } from "@reduxjs/toolkit";

const testSlice = createSlice({
  name: "test",
  initialState: {},
  reducers: {
    testuser: (state, action) => {},
  },
});


export const {testuser} = testSlice.actions
export default testSlice.reducer;
