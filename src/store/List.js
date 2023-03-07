import { createSlice } from '@reduxjs/toolkit'

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    field: "",
    names: [
      "Lorem Ipsum",
      "Hello world"
    ]
  },
  reducers: {
    add: (state, action) => {
      state.names.push(action.payload);
    },
    remove: (state, action) => {
      state.names.splice(action.payload, 1);
    },    
    define: (state, action) => {
      state[action.payload.name] = action.payload.value
    }    
  }
})

export const { add, define, remove } = listSlice.actions

export default listSlice.reducer