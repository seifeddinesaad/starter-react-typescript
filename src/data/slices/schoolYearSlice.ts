import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';

interface SchoolYearState {
  years: SchoolYear[];
  isLoading: boolean;
  error: string | null;
}

// Define a type for the User object
interface SchoolYear {
  id: number;
  name: string;
  description: string;
}

// Define the initial state using that type
const initialState: SchoolYearState = {
  years: [],
  isLoading: false,
  error: null,
};

// Define the asynchronous thunk for fetching users
export const fetchYears = createAsyncThunk<SchoolYear[]>(
  'users/fetchUsers',
  async (query, thunkAPI) => {
    const response = await fetch('/api/users');
    const data = await response.json();
    return data;
  }
);

// Define the slice
export const schoolYearSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle the "pending" state of the fetchUsers action
      .addCase(fetchYears.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // Handle the "fulfilled" state of the fetchUsers action
      .addCase(fetchYears.fulfilled, (state, action: PayloadAction<SchoolYear[]>) => {
        state.isLoading = false;
        state.years = action.payload;
      })
      // Handle the "rejected" state of the fetchUsers action
      .addCase(fetchYears.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

// Export the actions and reducer
export const {} = schoolYearSlice.actions;
export default schoolYearSlice.reducer;
