import { createSlice } from '@reduxjs/toolkit'

export const inputSlice = createSlice({
  name: 'input',
  initialState: {
    name: "John Doe",
    email: "john@doe.com",
    bio: "Lorem ipsum",
  },
  reducers: {
    define: (state, action) => {
      state[action.payload.name] = action.payload.value
    }
  }
})

export const { define } = inputSlice.actions

export default inputSlice.reducer