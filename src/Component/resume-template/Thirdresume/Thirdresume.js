import { Box, Card, Divider, Typography } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import LocationCityIcon from '@mui/icons-material/LocationCity';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import './Third.css'
import { useSelector } from 'react-redux';

const Thirdresume = () => {

  const state = useSelector((state) => state)


  return (
    <Card className='maincompo'>
      <Box className='firstcompo'>
        <Box className='upperresume' >
          <Box className='profile'>

            <img className='imageofperson' src={state.resumeinfo.personalinfo.image} alt='' />
            <Box className='profilebox' >
              <Box className='profilename' >
                {/* Chinmay Dhabale */}
                {state.resumeinfo.personalinfo.name} {state.resumeinfo.personalinfo.lastName}
              </Box>


            </Box>
          </Box>
        </Box>
        <Box className="address" >
          <span> <HomeIcon />{state.resumeinfo.personalinfo.address}</span>
          <br />
          <span> <LocationCityIcon /> {state.resumeinfo.personalinfo.city} {state.resumeinfo.personalinfo.state} {state.resumeinfo.personalinfo.postalCode}</span>
          <br />
          <span ><EmailIcon />{state.resumeinfo.personalinfo.email}</span>
          <br />
          <span><CallIcon />{state.resumeinfo.personalinfo.mobile}</span>
        </Box>
      </Box>
      <Box className="secondcompo">

        <Box className='bio3'>
          {state.resumeinfo.personalinfo.objective}
        </Box>


        <Box className="experience">
          <Typography variant='h5'>
            Professional Experience
          </Typography>
          <Divider />
          {state.resumeinfo.workexp.map((work) => {
            return (
              <Box className="listpad">

                <h2>{work.title}</h2>
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

          {state.resumeinfo.Education.map((edu) => {
            return (<Box className="listpad">
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

export default Thirdresume