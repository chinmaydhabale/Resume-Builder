import { Box, Card, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { useSelector } from 'react-redux';
import './First.css'

const Firstresume = () => {

    const state = useSelector((state) => state)


    return (
        <Card className='firstmaincompo'>
            <Box className="firstcompo1">
                <Box className='upperresume4' >
                    <Box className='profile4'>

                        <img className='imageofperson' src={state.resumeinfo.personalinfo.image} alt='' />
                        <Box className='profilebox4' >
                            <Box className='profilename' >
                                {state.resumeinfo.personalinfo.name} <br /> {state.resumeinfo.personalinfo.lastName}
                            </Box>


                        </Box>
                    </Box>
                </Box>
                <Box className="address4" >
                    <span> <HomeIcon />{state.resumeinfo.personalinfo.address}</span>
                    <br />
                    <span> <LocationCityIcon />{state.resumeinfo.personalinfo.city} {state.resumeinfo.personalinfo.state} {state.resumeinfo.personalinfo.postalCode}</span>
                    <br />
                    <span><EmailIcon />{state.resumeinfo.personalinfo.email}</span>
                    <br />
                    <span><CallIcon />{state.resumeinfo.personalinfo.mobile}</span>
                </Box>

            </Box>
            <Box className='bio1'>
                {state.resumeinfo.personalinfo.objective}
            </Box>
            <Box className="secondcompo4">
                <Box className="experience">
                    <Typography variant='h5'>
                        Professional Experience
                    </Typography>
                    <hr />
                    {state.resumeinfo.workexp.map((work, i) => {
                        return (
                            <Box className="listpad" key={i}>

                                <h1>{work.title}</h1>
                                <li>{work.Organization}</li>
                                <li>Start {work.startyear}</li>
                                <li>End {work.endyear}</li>
                            </Box>
                        )
                    })}
                </Box>
                <Box className="education">
                    <Typography variant='h5'>
                        Education
                    </Typography>
                    <hr />
                    {state.resumeinfo.Education.map((edu, i) => {
                        return (<Box className="listpad" key={i}>
                            <h2>{edu.type}</h2>
                            <li>{edu.university}</li>
                            <li>{edu.degree}</li>
                            <li>Start {edu.startyear}</li>
                            <li>Complete {edu.endyear}</li>
                        </Box>)
                    })}
                </Box>
                <Box className="skill">
                    <Typography>
                        Key skill
                    </Typography>
                    <hr />
                    <Box className="listpad1">
                        {
                            state.resumeinfo.skills.map((skill) => {

                                return (<li>{skill.skills}</li>)
                            })
                        }
                    </Box>
                </Box>
            </Box>
        </Card>
    )
}

export default Firstresume