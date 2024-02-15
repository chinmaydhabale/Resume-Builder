import { Box, Card, Typography, Divider } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { useSelector } from 'react-redux';
import './Forth.css'

const Forthresume = () => {

    const state = useSelector((state) => state)


    return (
        <Card>
            <Box className="firstcompo4">
                <Box className='upperresume4' >
                    <Box className='profile4'>

                        <img className='imageofperson' src={state.resumeinfo.profileimage} alt='' />
                        <Box className='profilebox4' >
                            <Box className='profilename' >
                                {state.resumeinfo.personalinfo.name} {state.resumeinfo.personalinfo.lastName}

                            </Box>

                        </Box>
                    </Box>
                </Box>
                <Box className="address4" >
                    <span> <HomeIcon />{state.resumeinfo.personalinfo.address}</span>
                    <br />
                    <span> <LocationCityIcon />{state.resumeinfo.personalinfo.city} {state.resumeinfo.personalinfo.postalCode}</span>
                    <br />
                    <span><EmailIcon />{state.resumeinfo.personalinfo.email}</span>
                    <br />
                    <span><CallIcon />{state.resumeinfo.personalinfo.mobile}</span>
                </Box>

            </Box>
            <Box className='bio'>
                {state.resumeinfo.personalinfo.objective}
            </Box>
            <Box className="secondcompo4">
                <Box className="experience">
                    <Typography variant='h5'>
                        Professional Experience
                    </Typography>
                    <Divider />

                    {state.resumeinfo.workexp.map((work) => {
                        return (
                            <Box className="listpad">

                                <h1>{work.title}</h1>
                                <li>{work.Organization}</li>
                                <li>{work.startyear}</li>
                                <li>{work.endyear}</li>
                            </Box>
                        )
                    })}
                </Box>
                <Box className="education">
                    <Typography variant='h5'>
                        Education
                    </Typography>
                    <Divider />

                    {state.resumeinfo.Education.map((edu) => {
                        return (<Box className="listpad">
                            <h2>{edu.type}</h2>
                            <li>{edu.university}</li>
                            <li>{edu.degree}</li>
                            <li>{edu.startyear}</li>
                            <li>{edu.endyear}</li>
                        </Box>)
                    })}
                </Box>
                <Box className="skill">
                    <Typography>
                        Key skill
                    </Typography>
                    <Divider />

                    <Box className="listpad">
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

export default Forthresume