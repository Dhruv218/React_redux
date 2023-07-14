import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';

  export const fetchCatData = createAsyncThunk('api/fetchCatData', async () => {
    const response = await fetch('https://api.thecatapi.com/v1/images/search?limit=16');
    const data = await response.json();
    return data;
  });

  
const apiSlice = createSlice({
    name: 'api',
    initialState: {
      loading: false,
      data: [],
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchCatData.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchCatData.fulfilled, (state, action) => {
          state.loading = false;
          state.data = action.payload;
        })
        .addCase(fetchCatData.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
  });

  export default apiSlice.reducer;
