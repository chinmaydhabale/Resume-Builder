import { Box, Button, IconButton } from '@mui/material'
import React from 'react'
import Logo from '../Utility/photos/LOGO (1).png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()


    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#1976d2', color: 'white', padding: 0, marginBottom: '5px' }}>
            <Box>
                <IconButton onClick={() => navigate('/')}>
                    <img src={Logo} height={30} width={120} style={{ paddingLeft: '5px' }} alt="" />
                </IconButton>
            </Box>
            <Box style={{ display: 'flex', justifyContent: 'space-evenly', color: 'white' }}>
                <Button color='inherit' onClick={() => navigate('/')}>HOME</Button>
                <Button color='inherit' onClick={() => navigate('/myresume')}>SAVE RESUME</Button>
                <Button color='inherit' onClick={() => navigate('/aboutus')}>ABOUT</Button>
            </Box>
        </div>
    )
}

export default Navbar