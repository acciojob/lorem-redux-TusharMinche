import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import "regenerator-runtime/runtime";

// Mock async fetch
export const fetchLorem = createAsyncThunk(
  'lorem/fetchLorem',
  async () => {
    // Simulate network latency with setTimeout
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: "Lorem Ipsum",
          body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus."
        });
      }, 1000); // 1s delay to show loading state
    });
  }
);

const loremSlice = createSlice({
  name: 'lorem',
  initialState: {
    data: null,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLorem.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchLorem.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchLorem.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default loremSlice.reducer;
