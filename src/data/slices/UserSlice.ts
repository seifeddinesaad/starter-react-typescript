import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { enqueueSnackbar } from './notifierSlice';
import { Slide } from '@mui/material';

// Define a type for the slice state
interface UserState {
  users: User[];
  isLoading: boolean;
  error: string | null;
}

// Define a type for the User object
interface User {
  id: number;
  name: string;
  email: string;
}

// Define the initial state using that type
const initialState: UserState = {
  users: [],
  isLoading: false,
  error: null,
};

// Define the asynchronous thunk for fetching users
export const fetchUsers = createAsyncThunk<User[]>('users/fetchUsers', async (query, thunkAPI) => {
  const response = await fetch('/api/users');
  const data = await response.json();
  //if (response.status === 200) {
  /* thunkAPI.dispatch(
      enqueueSnackbar({
        message: data.message,
        options: {
          key: new Date().getTime() + Math.random(),
          variant: 'success',
          anchorOrigin: {
            vertical: 'bottom',
            horizontal: 'center',
          },
          TransitionComponent: Slide,
        },
      })
    );*/
  return data;
  //}
});

// Define the slice
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Handle the "pending" state of the fetchUsers action
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      // Handle the "fulfilled" state of the fetchUsers action
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<User[]>) => {
        state.isLoading = false;
        state.users = action.payload;
      })
      // Handle the "rejected" state of the fetchUsers action
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message || 'Something went wrong';
      });
  },
});

// Export the actions and reducer
export const {} = userSlice.actions;
export default userSlice.reducer;
