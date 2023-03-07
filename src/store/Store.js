import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter';
import inputReducer from './InputForm';

export default configureStore({
  reducer: {
    counter: counterReducer,
    input: inputReducer
  }
})