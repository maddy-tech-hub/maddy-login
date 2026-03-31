import { combineReducers, configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import userReducer from './slices/userSlice';

export const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootStateType = ReturnType<typeof rootReducer>;
export type AppDispatchType = typeof store.dispatch;
export default store;
