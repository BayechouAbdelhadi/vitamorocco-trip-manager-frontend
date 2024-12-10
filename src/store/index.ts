import { configureStore } from '@reduxjs/toolkit';
import rootReducers from './rootReducer';

export const store = configureStore({
  devTools: import.meta.env.NODE_ENV === 'development' ? { trace: true } : false,
  reducer: rootReducers,
});
