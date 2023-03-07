import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';

interface Modal {
  id: string;
  open: boolean;
  data?: any;
}

interface ModalsState {
  modals: Modal[];
}

const initialState: ModalsState = {
  modals: [
    {
      id: 'add-content-modal',
      open: false,
    },
    {
      id: 'add-video-modal',
      open: false,
    },
  ],
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state, action: PayloadAction<{ id: string; data: any }>) => {
      const { id, data } = action.payload;
      const index = state.modals.findIndex((modal) => modal.id === id);
      state.modals[index].open = true;
      state.modals[index].data = data;
    },
    closeModal: (state, action: PayloadAction<string>) => {
      const id = action.payload;
      const index = state.modals.findIndex((modal) => modal.id === id);
      state.modals[index].open = false;
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;

export const openModalAsync =
  (id: string, data?: any): AppThunk =>
  (dispatch) => {
    dispatch(openModal({ id, data }));
  };

export const closeModalAsync =
  (id: string): AppThunk =>
  (dispatch) => {
    dispatch(closeModal(id));
  };
