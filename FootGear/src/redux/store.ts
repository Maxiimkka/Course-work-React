import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import sneakers from './Sneakers/slice';
import cart from './Cart/slice';
import full from './Full/slice';
import fillter from './Fillter/slice';
import reducer from './register/reducer';

const rootReducer = combineReducers({
  sneakers,
  cart,
  full,
  fillter,
  user: reducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();