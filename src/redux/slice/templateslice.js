import { createSlice } from "@reduxjs/toolkit";

const templateset = createSlice({
    name: "templateset",
    initialState: {
        selectresume: [],
        saveresume: null,
        resumename: ''

    },
    reducers: {
        setselectresume: (state, action) => {
            state.selectresume = action.payload
        },
        setsaveresume: (state, action) => {
            state.saveresume = action.payload
        },
        setresumename: (state, action) => {
            state.resumename = action.payload
        }

    }
})

export const { setsaveresume, setselectresume, setresumename } = templateset.actions;

export default templateset.reducer;