import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';
import axios from '../../utils/axios';
const devTools = process.env.ENABLE_REDUX_DEV_TOOLS === 'true' ? true : undefined;

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: {
        extraArgument: axios,
      },
      serializableCheck: false,
    }),
  ],
  devTools,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;
