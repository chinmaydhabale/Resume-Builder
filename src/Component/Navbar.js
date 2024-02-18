import { Box, IconButton } from '@mui/material'
import React from 'react'
import Logo from '../Utility/photos/LOGO (1).png'
import { useNavigate } from 'react-router-dom'
import './css/Navbar.css'

const Navbar = () => {

    const navigate = useNavigate()


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#1976d2', color: 'white', padding: 0, marginBottom: '5px' }}>
            {/* for logo  */}
            <Box>
                <IconButton onClick={() => navigate('/')}>
                    <img className='logoimg' src={Logo} alt="" />
                </IconButton>
            </Box>
            {/* for nav items  */}
            <div className='navname' >
                <li style={{ cursor: 'pointer' }} onClick={() => navigate('/')}>TEMPLATES</li>
                <li style={{ cursor: 'pointer' }} onClick={() => navigate('/myresume')}>MYRESUME</li>
                <li style={{ cursor: 'pointer' }} onClick={() => navigate('/aboutus')}>ABOUT</li>
            </div>
        </div>
    )
}

export default Navbar