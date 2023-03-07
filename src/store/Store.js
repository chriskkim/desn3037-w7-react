import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './Counter';
import inputReducer from './InputForm';
import listReducer from './List';

export default configureStore({
  reducer: {
    counter: counterReducer,
    input: inputReducer,
    list: listReducer
  }
})