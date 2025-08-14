import { configureStore } from '@reduxjs/toolkit';
import groceriesReducer from '../features/groceries/groceriesSlice';

export const store = configureStore({
    reducer: {
        groceries: groceriesReducer
    }
});
