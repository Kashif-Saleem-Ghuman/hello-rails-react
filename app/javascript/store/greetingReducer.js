import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchGreeting = createAsyncThunk(
  "greeting/fetchGreeting",async() => {
    const response = await axios.get("/api/v1/greetings");
    return response.data;
  }
);

const greetingSlice = createSlice({
  name: "greeting",
  initialState: {
    greeting: "",
    status: null,
    loading: false,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [fetchGreeting.pending]: (state, action) => {
      state.loading = true;
      state.status = true;
      state.error = false;
    },
    [fetchGreeting.fulfilled]: (state, action) => {
      state.greeting = action.payload;
      state.loading = false;
      state.error = false;
      state.status = "success";
    },
    [fetchGreeting.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      state.status = "failed";
    },
  },
});

export default greetingSlice.reducer;