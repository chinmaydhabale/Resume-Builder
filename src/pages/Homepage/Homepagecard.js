import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { setselectresume } from '../../redux/slice/templateslice';
import { useDispatch } from 'react-redux';
import './Homepage.css'
import { Box, Button } from '@mui/material';

const Homepagecard = ({ data, thumbnail, id }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isHovered, setIsHovered] = useState(false);

    const template = {
        data,
        thumbnail,
        id
    }

    //to select the resume button
    const onSubmit = () => {
        dispatch(setselectresume(template.id))
        navigate('/Detailfilling');
    };



    // for resume hover effect and Set isHovered to true when the mouse leaves the image
    const handleHover = () => {
        setIsHovered(true);
    };

    // Set isHovered to false when the mouse leaves the image
    const handleHoverExit = () => {
        setIsHovered(false);
    };
    return (
        <>
            {/*main Content*/}
            <Box sx={{ margin: '3vh 1vw', height: 'auto', width: 'auto', position: 'relative' }}>
                <Box>
                    {/*Show Templates Dummy Images*/}
                    <img
                        className='templateimgh'
                        style={{

                            border: '3px solid black',
                            opacity: isHovered ? 0.7 : 1, // Set opacity when hovered
                        }}
                        src={template.thumbnail}
                        alt="Template Thumbnail"
                        onMouseEnter={handleHover} // Handle hover enter event
                        onMouseLeave={handleHoverExit} // Handle hover exit event
                    />

                    {/*Show the button only when hovered*/}
                    {isHovered && (
                        //Resume select Button
                        <Button
                            variant='contained'
                            sx={{
                                position: 'absolute',
                                left: '50%',
                                top: '50%',
                                transform: 'translate(-50%, -50%)',
                                alignItems: 'center',
                            }}
                            onClick={onSubmit}
                            onMouseEnter={handleHover} // Handle hover enter event
                            onMouseLeave={handleHoverExit} // Handle hover exit event
                        >
                            Select
                        </Button>
                    )}
                </Box>
            </Box>
        </>
    )
}

export default Homepagecard