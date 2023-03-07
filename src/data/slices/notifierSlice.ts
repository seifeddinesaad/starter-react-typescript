import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk, RootState } from '../store';
import { AppDispatch } from '../store';

interface Notification {
  message: string;
  key?: number | string;
  options?: any;
  dismissed?: boolean;
}

interface NotifierState {
  notifications: Notification[];
}

const initialState: NotifierState = {
  notifications: [],
};

const notifierSlice = createSlice({
  name: 'notifier',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<Notification>) => {
      state.notifications.push(action.payload);
    },
    closeNotification: (state, action: PayloadAction<number | string>) => {
      const key = action.payload;
      if (key) {
        state.notifications = state.notifications.map((notification) =>
          notification.key === key ? { ...notification, dismissed: true } : notification
        );
      } else {
        state.notifications = state.notifications.map((notification) => ({
          ...notification,
          dismissed: true,
        }));
      }
    },
    removeNotification: (state, action: PayloadAction<number | string>) => {
      const key = action.payload;
      if (key) {
        state.notifications = state.notifications.filter(
          (notification) => notification.key !== key
        );
      } else {
        state.notifications = [];
      }
    },
  },
});

export const { addNotification, closeNotification, removeNotification } = notifierSlice.actions;

export const enqueueSnackbar =
  (notification: Notification): AppThunk =>
  (dispatch: AppDispatch) => {
    const key = notification.key || new Date().getTime() + Math.random();
    dispatch(addNotification({ ...notification, key }));
  };

export const closeSnackbar =
  (key?: number | string): AppThunk =>
  (dispatch: AppDispatch) => {
    if (key !== undefined) {
      dispatch(closeNotification(key));
    }
  };

export const removeSnackbar =
  (key?: number | string): AppThunk =>
  (dispatch: AppDispatch) => {
    if (key !== undefined) {
      dispatch(removeNotification(key));
    }
  };

export default notifierSlice.reducer;
