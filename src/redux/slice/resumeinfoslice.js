/* import { createSlice } from "@reduxjs/toolkit";

const resumeInfo = createSlice({
    name: "resumeInfo",
    initialState: {
        personalinfo: null,
        Education: null,
        skills: null,
        workexp: null,
    },
    reducers: {
        setPersonalInfo: (state, action) => {
            state.personalinfo = action.payload
        },
        setEducation: (state, action) => {
            state.Education = action.payload
        },
        setSkills: (state, action) => {
            state.skills = action.payload
        },
        setWorkexp: (state, action) => {
            state.workexp = action.payload
        }
    }
})

export const { setPersonalInfo, setEducation, setSkills, setWorkexp } = resumeInfo.actions;

export default resumeInfo.reducer; */


import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    personalinfo: null,
    Education: null,
    skills: null,
    workexp: null,
};

// Load state from localStorage
const persistedState = JSON.parse(localStorage.getItem("resumeInfo")) || initialState;

const resumeInfo = createSlice({
    name: "resumeInfo",
    initialState: persistedState,
    reducers: {
        setPersonalInfo: (state, action) => {
            state.personalinfo = action.payload;
        },
        setEducation: (state, action) => {
            state.Education = action.payload;
        },
        setSkills: (state, action) => {
            state.skills = action.payload;
        },
        setWorkexp: (state, action) => {
            state.workexp = action.payload;
        },
    },
});

// Save state to localStorage after each action
const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("resumeInfo", serializedState);
    } catch (err) {
        console.error("Error saving state to localStorage:", err);
    }
};

export const { setPersonalInfo, setEducation, setSkills, setWorkexp } = resumeInfo.actions;

// Wrap the reducer to save state after each action
const reducer = (state, action) => {
    const newState = resumeInfo.reducer(state, action);
    saveState(newState);
    return newState;
};

export default reducer;
