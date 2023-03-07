import { combineReducers, Reducer, ReducersMapObject } from '@reduxjs/toolkit';
import notifierReducer from '../slices/notifierSlice';
import departmentReducer from '../slices/departmentSlice';
import modalReducer from '../slices/modalSlice';
import schoolYearReducer from '../slices/schoolYearSlice';
import userReducer from '../slices/UserSlice';

interface RootState {
  notifier: ReturnType<typeof notifierReducer>;
  department: ReturnType<typeof departmentReducer>;
  modal: ReturnType<typeof modalReducer>;
  schoolYear: ReturnType<typeof schoolYearReducer>;
  user: ReturnType<typeof userReducer>;
}

const reducers: ReducersMapObject<RootState> = {
  notifier: notifierReducer,
  department: departmentReducer,
  modal: modalReducer,
  schoolYear: schoolYearReducer,
  user: userReducer,
};

const combinedReducer: Reducer<RootState> = combineReducers(reducers);

export default combinedReducer;
