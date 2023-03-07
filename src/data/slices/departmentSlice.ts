import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  title: null,
  description: '',
  status: 'idle',
  error: null,
};

const slice = createSlice({
  name: 'department',
  initialState,
  reducers: {
    updateDepartment(state, action: PayloadAction<any>) {
      state.title = action.payload;
    },
  },
  extraReducers: {},
});

export const { updateDepartment } = slice.actions;
export default slice.reducer;
