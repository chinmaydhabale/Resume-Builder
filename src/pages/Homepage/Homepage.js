import React from 'react'
import temp from '../../data/resumedata'
import Homepagecard from './Homepagecard';
import Navbar from '../../Component/Navbar';
import './Homepage.css'
import { Box } from '@mui/material';

const Homepage = () => {



    return (
        <Box className='template'>
            <Navbar />
            <Box sx={{ padding: '15px' }}>
                <h1>Templates</h1>
                <p>Select a Template to get started</p>
            </Box>
            {/* iterate all the templates */}
            <Box className='AllTemplates' >
                {temp.map((templates) => (
                    <Homepagecard
                        data={templates.data}
                        thumbnail={templates.thumbnail}
                        key={templates.id}
                    />
                ))}
            </Box>
        </Box>
    )
}

export default Homepage