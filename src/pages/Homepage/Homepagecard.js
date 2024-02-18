import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { setselectresume } from '../../redux/slice/templateslice';
import { useDispatch } from 'react-redux';
import './Homepage.css'

const Homepagecard = ({ data, thumbnail }) => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [isHovered, setIsHovered] = useState(false);

    const template = {
        data,
        thumbnail
    }

    //to select the resume button
    const onSubmit = () => {
        dispatch(setselectresume(template))
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
            <div style={{ margin: '3vh 1vw', height: 'auto', width: 'auto', position: 'relative' }}>
                <div>
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
                        <button
                            style={{
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
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default Homepagecard