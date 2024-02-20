import { Box, Card, Divider, Typography } from '@mui/material'
import React from 'react'
import './second.css'
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { useSelector } from 'react-redux';


const Secondresume = () => {
    const state = useSelector((state) => state)


    return (
        <Card className='secondmain'>
            <Box className='upperresume' >
                <Box className='profile'>

                    <img className='imageofperson' src={state.resumeinfo.personalinfo.image} alt='' />
                    <Box className='profilebox' >
                        <Box className='profilename' >
                            {state.resumeinfo.personalinfo.name} {state.resumeinfo.personalinfo.lastName}

                        </Box>


                    </Box>
                </Box>
            </Box>
            <Box className="address" sx={{ display: 'flex', flexWrap: "wrap", gap: '10px' }}>
                <span> <HomeIcon />{state.resumeinfo.personalinfo.address}</span>
                <br />
                <span> <LocationCityIcon />{state.resumeinfo.personalinfo.city} {state.resumeinfo.personalinfo.state} {state.resumeinfo.personalinfo.postalCode}</span>
                <br />
                <span><EmailIcon />{state.resumeinfo.personalinfo.email}</span>
                <br />
                <span><CallIcon />{state.resumeinfo.personalinfo.mobile}</span>
            </Box>

            <Box className='bio2'>
                {state.resumeinfo.personalinfo.objective}
            </Box>


            <Box className="experience">
                <Typography variant='h5'>
                    Professional Experience
                </Typography>
                <Divider />

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
                <Divider />

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
                <Divider />

                <Box className="listpad">
                    {
                        state.resumeinfo.skills.map((skill, i) => {

                            return (<li key={i}>{skill.skills}</li>)
                        })
                    }
                </Box>
            </Box>
        </Card >
    )
}

export default Secondresume