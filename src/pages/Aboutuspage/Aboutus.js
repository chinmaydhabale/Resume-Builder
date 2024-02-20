import React from 'react';
import {
    FacebookShareButton,
    WhatsappShareButton,
    WhatsappIcon,
    FacebookIcon,
    LinkedinIcon,
    LinkedinShareButton,
} from 'react-share';
import Navbar from '../../Component/Navbar';
import { Box, Typography } from '@mui/material';


function Aboutus() {

    return (
        <Box>
            {/* Header Component to Navigate */}
            <Navbar />

            {/* Main Content */}
            <Box sx={{ textAlign: 'center', marginLeft: '10vw', marginRight: '10vw', marginTop: '5vw' }}>
                <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
                    " Welcome to our Resume Builder ! "
                </Typography>
                <br></br>

                {/*  About Us paragraph */}
                <Typography sx={{ textAlign: 'center' }}>
                    "  we understand the importance of creating a professional and impactful resume.
                    We believe that a well-crafted resume can make a significant difference in your job search, helping you stand out from the competition
                    and land your dream job.<br /><br />Our Resume Builder is designed to simplify the resume creation process, offering a user-friendly interface
                    and a wide range of customizable templates. Whether you're a recent graduate, a seasoned professional, or making a career transition,
                    our platform provides the tools and resources you need to create a compelling resume that highlights your skills, experience,
                    and achievements.  "
                </Typography>

                <Typography variant='h5' sx={{ fontWeight: 'bold', marginTop: '8px' }}>
                    Share with Your Friends.
                </Typography>

                {/* Share buttons */}
                <Box className='mt-8 flex justify-center' sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ marginRight: "2vh" }}>
                        {/* Facebook share button */}
                        <FacebookShareButton
                            url={'https://resume-builder-bay.vercel.app/'}
                            quote={'create your own resume'}
                            hashtag={'#portfolio...'}
                        >
                            <FacebookIcon className='buttonIcons' size={40} round={true} />
                        </FacebookShareButton>
                    </Box>

                    <Box sx={{ marginRight: "2vh" }}>
                        {/* LinkedIn share button */}
                        <LinkedinShareButton
                            url={'https://resume-builder-bay.vercel.app/'}
                            quote={'create your own resume'}
                            hashtag={'#portfolio...'}
                        >
                            <LinkedinIcon className='buttonIcons' size={40} round={true} />
                        </LinkedinShareButton>
                    </Box>

                    <Box sx={{ marginRight: "2vh" }}>
                        {/* WhatsApp share button */}
                        <WhatsappShareButton
                            url={'https://resume-builder-bay.vercel.app/'}
                            quote={'create your own resume'}
                            hashtag={'#portfolio...'}
                        >
                            <WhatsappIcon className='buttonIcons' size={40} round={true} />
                        </WhatsappShareButton>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Aboutus;