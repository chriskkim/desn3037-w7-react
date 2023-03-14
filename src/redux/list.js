import { createSlice } from '@reduxjs/toolkit'
import { takeSnapshot } from '../components/Sync'

const payload = window.localStorage.getItem("payload");
let initialState;

if (payload !== "" && payload !== null) {

    const payloadJSON = JSON.parse(payload);

    initialState = {
        field: payloadJSON.list.field,
        items: payloadJSON.list.items
    }

} else {

    initialState = {
        field: "Lorem ipsum",
        items: [
            "Lazy dog",
            "Quick brown fox",
            "Chris Kim"
        ]
    }

}

export const listSlice = createSlice({
    name: 'list',
    initialState,
    reducers: {
        define: (state, action) => {
            state.field = action.payload
        },
        add: (state, action) => {
            state.items.push(action.payload);
            state.field = "";
        },
        remove: (state, action) => {
            state.items.splice(action.payload, 1);
        }
    },
})

export const { define, add, remove } = listSlice.actions
export default listSlice.reducer