import { createSlice } from "@reduxjs/toolkit";

const resumeInfo = createSlice({
    name: "resumeInfo",
    initialState: {
        profileimage: "",
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
        setprofile: (state, action) => {
            state.profileimage = action.payload
        },
        setWorkexp: (state, action) => {
            state.workexp = action.payload
        }
    }
})

export const { setPersonalInfo, setEducation, setSkills, setWorkexp, setprofile } = resumeInfo.actions;

export default resumeInfo.reducer;