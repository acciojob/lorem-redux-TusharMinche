import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import "regenerator-runtime/runtime";


export const fetchLorem = createAsyncThunk(
  'lorem/fetchLorem',
  async () => {
    
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
          body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        });
      }, 1000);
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
