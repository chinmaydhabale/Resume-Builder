/* import { createSlice } from "@reduxjs/toolkit";

const templateset = createSlice({
    name: "templateset",
    initialState: {
        selectresume: null,
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

export default templateset.reducer; */


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selectresume: null,
    saveresume: null,
    resumename: ''
};

// Load state from localStorage
const persistedState = JSON.parse(localStorage.getItem("templateset")) || initialState;

const templateset = createSlice({
    name: "templateset",
    initialState: persistedState,
    reducers: {
        setselectresume: (state, action) => {
            state.selectresume = action.payload;
        },
        setsaveresume: (state, action) => {
            state.saveresume = action.payload;
        },
        setresumename: (state, action) => {
            state.resumename = action.payload;
        }
    },
});

// Save state to localStorage after each action
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("templateset", serializedState);
    } catch (err) {
        console.error("Error saving state to localStorage:", err);
    }
};

export const { setsaveresume, setselectresume, setresumename } = templateset.actions;

// Wrap the reducer to save state after each action
const reducer = (state, action) => {
    const newState = templateset.reducer(state, action);
    saveState(newState);
    return newState;
};

export default reducer;
