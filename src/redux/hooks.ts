import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import type { RootState, AppDispatch } from './store';

// Custom hook for using the Redux dispatch function
export const useAppDispatch: () => AppDispatch = useDispatch;

// Custom hook for using the Redux useSelector function
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
