// src/store/hooks.js
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
// import { RootState, AppDispatch } from './store'; // Uncomment if you migrate to TypeScript

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
