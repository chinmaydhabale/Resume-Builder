import { Box, Button, Paper, } from '@mui/material';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import PersonalInfo from '../../Component/PersonalInfo';
import Education from '../../Component/Education'
import Workexp from '../../Component/Workexp';
import Skills from '../../Component/Skill';
import './detailfilling.css'
import Navbar from '../../Component/Navbar';
import toast from 'react-hot-toast';



const Detailfilling = () => {

    const navigate = useNavigate();

    const state = useSelector((state) => state)


    //Handles State of activeComponent
    const [activeComponent, setActiveComponent] = useState('personal');



    // Handle click on sidebar menu items
    const handleSidebarClick = (componentName) => {

        // Validation logic for navigation between components
        switch (activeComponent) {
            case 'personal':
                if (componentName === 'education' || componentName === 'work' || componentName === 'keyskill') {
                    if (state.resumeinfo.personalinfo !== null) {

                        setActiveComponent(componentName)
                    }
                    else {
                        toast.error("Submit the personal information")
                    }
                }
                break;
            case 'education':
                if (componentName === 'work' || componentName === 'keyskill') {

                    if (state.resumeinfo.Education !== null) {

                        setActiveComponent(componentName)
                    } else {
                        toast.error("add the Education information")
                    }
                } else if (componentName === 'personal' || componentName === 'education') {
                    setActiveComponent(componentName)
                }
                else {
                    toast.error("add the Education information")
                }
                break;
            case 'work':
                if (componentName === 'keyskill') {

                    if (state.resumeinfo.workexp !== null) {

                        setActiveComponent(componentName)
                    } else {
                        toast.error("add the Work information")
                    }
                } else if (componentName === 'personal' || componentName === 'education' || componentName === 'work') {
                    setActiveComponent(componentName)
                }
                else {
                    toast.error("add the Work information")
                }
                break;
            case 'keyskill':
                if (componentName === 'preview' && state.resumeinfo.skills !== null) {
                    setActiveComponent(componentName)

                } else if (componentName === 'personal' || componentName === 'education' || componentName === 'work' || componentName === 'keyskill') {
                    setActiveComponent(componentName)
                }
                else {
                    toast.error("add the Skill information")
                }
                break;
            default:
                break;
        }

    };

    // Handle click on Next button
    const handleNext = () => {
        switch (activeComponent) {
            case 'personal':
                if (state.resumeinfo.personalinfo !== null) {
                    setActiveComponent('education');
                } else {
                    toast.error("Submit all the information.")
                }
                break;
            case 'education':
                if (state.resumeinfo.Education !== null) {
                    setActiveComponent('work');
                } else {
                    toast.error("Add the education information.")
                }
                break;
            case 'work':
                if (state.resumeinfo.workexp !== null) {
                    setActiveComponent('keyskill');
                } else {
                    toast.error("Add the work information.")
                }
                break;
            case 'keyskill':
                if (state.resumeinfo.skills !== null) {
                    if (state.resumeinfo.personalinfo !== null || state.resumeinfo.Education !== null || state.resumeinfo.workexp !== null) {
                        navigate('/preview');
                    }
                } else {
                    toast.error("Add all the information.")
                }
                break;
            default:
                break;
        }
    };

    // Handle click on Back button
    const handleBack = () => {
        switch (activeComponent) {
            case 'personal':
                var answer = window.confirm("are you sure to discard?");
                if (answer) {
                    // Save it!
                    navigate('/');
                } else {
                    // Do nothing!
                    navigate('/Detailfilling');
                }
                break;
            case 'education':
                setActiveComponent('personal');
                break;
            case 'work':
                setActiveComponent('education');
                break;
            case 'keyskill':
                setActiveComponent('work');
                break;
            default:
                break;
        }
    };



    return (
        <div>
            <Navbar />
            <div className='maindetail'>
                {/* sidebar buttons */}
                <Box className='detailbutton'>
                    <Button sx={{ border: "1px solid" }} style={{ backgroundColor: activeComponent === 'personal' ? '#1976d2' : 'white', color: activeComponent === 'personal' ? 'white' : '#1976d2' }} onClick={() => handleSidebarClick('personal')}>Personal Info</Button>

                    <Button sx={{ border: "1px solid" }} style={{ backgroundColor: activeComponent === 'education' ? '#1976d2' : 'white', color: activeComponent === 'education' ? 'white' : '#1976d2' }} onClick={() => handleSidebarClick('education')}>Education</Button>

                    <Button sx={{ border: "1px solid" }} style={{ backgroundColor: activeComponent === 'work' ? '#1976d2' : 'white', color: activeComponent === 'work' ? 'white' : '#1976d2' }} onClick={() => handleSidebarClick('work')}>Work Experience</Button>

                    <Button sx={{ border: "1px solid" }} style={{ backgroundColor: activeComponent === 'keyskill' ? '#1976d2' : 'white', color: activeComponent === 'keyskill' ? 'white' : '#1976d2' }} onClick={() => handleSidebarClick('keyskill')}>Key Skills</Button>
                </Box>
                <Paper>
                    <div>
                        {/* Render component based on activeComponent */}
                        {activeComponent === 'personal' && <PersonalInfo />}
                        {activeComponent === 'education' && <Education />}
                        {activeComponent === 'work' && <Workexp />}
                        {activeComponent === 'keyskill' && <Skills />}
                    </div>
                </Paper>
            </div>
            {/* next and back component  */}
            <Box className='dfbtn' >
                <Button onClick={handleBack} variant='outlined'>Back</Button>
                <Button onClick={handleNext} variant='contained'>{activeComponent === 'keyskill' ? (

                    'Preview'

                ) : (
                    'Next'
                )}</Button>
            </Box>
        </div>
    )
}

export default Detailfilling