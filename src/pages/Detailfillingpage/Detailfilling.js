import { Box, Button, Paper, } from '@mui/material';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
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

    console.log(state)

    //Handles State of activeComponent
    const [activeComponent, setActiveComponent] = useState('personal');



    // Handle click on sidebar menu items
    const handleSidebarClick = (componentName) => {

        // Validation logic for navigation between components
        switch (activeComponent) {
            case 'personal':
                if (componentName === 'education' && state.resumeinfo.personalinfo === null) {
                    toast.error("Submit the personal information")
                } else {
                    setActiveComponent(componentName)
                }
                break;
            case 'education':
                if (componentName === 'work' && state.resumeinfo.
                    Education === null) {
                    toast.error("Submit or add the Education information")

                } else {
                    setActiveComponent(componentName)
                }
                break;
            case 'work':
                if (componentName === 'keyskill' && state.experience.workexp === null) {
                    toast.error("Submit or add the Work information")

                } else {
                    setActiveComponent(componentName)
                }
                break;
            case 'keyskill':
                if (componentName === 'preview' && state.resumeinfo.skills === null) {
                    toast.error("Submit or add the Skill information")

                } else {
                    setActiveComponent(componentName)
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
                    toast.error("First Submit the information.")
                }
                break;
            case 'education':
                if (state.resumeinfo.Education !== null) {
                    setActiveComponent('work');
                } else {
                    toast.error("First Submit the information.")
                }
                break;
            case 'work':
                if (state.resumeinfo.workexp !== null) {
                    setActiveComponent('keyskill');
                } else {
                    toast.error("First Submit the information.")
                }
                break;
            case 'keyskill':
                if (state.resumeinfo.skills !== null) {
                    if (state.resumeinfo.personalinfo !== null || state.resumeinfo.Education !== null || state.resumeinfo.workexp !== null) {
                        navigate('/preview');
                    }
                } else {
                    toast.error("First Submit the information.")
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
                <Box className='detailbutton'>
                    <Button sx={{ border: "1px solid" }} className={`${activeComponent === 'personal' ? 'bluebtn' : ''
                        }`} onClick={() => handleSidebarClick('personal')}>Personal Info</Button>

                    <Button sx={{ border: "1px solid" }} className={`${activeComponent === 'education' ? 'bluebtn' : ''
                        }`} onClick={() => handleSidebarClick('education')}>Education</Button>

                    <Button sx={{ border: "1px solid" }} className={`${activeComponent === 'work' ? 'bluebtn' : ''
                        }`} onClick={() => handleSidebarClick('work')}>Work Experience</Button>

                    <Button sx={{ border: "1px solid" }} className={`${activeComponent === 'keyskill' ? 'bluebtn' : ''
                        }`} onClick={() => handleSidebarClick('keyskill')}>Key Skills</Button>
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
            <Box sx={{ display: "flex", mt: 3, margin: "5px", gap: "20px", position: 'fixed', bottom: 0, right: '50%', left: '50%' }}>
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