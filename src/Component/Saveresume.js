import React from 'react';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import nodata from '../Utility/photos/nodata.png';
import { Button } from '@mui/material';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { useState } from 'react';
import CloudDownloadIcon from '@mui/icons-material/CloudDownload';
import temp from '../data/resumedata';



function Saveresume() {


    const state = useSelector((state) => state.template.saveresume)
    const resumename = useSelector((state) => state.template.resumename)

    // State for hover effect
    const [isHovered, setIsHovered] = useState(false);

    // Function to handle hover enter event
    const handleHover = () => {
        setIsHovered(true);
    };

    // Function to handle hover exit event
    const handleHoverExit = () => {
        setIsHovered(false);
    };


    //get a selected template
    const gettemplate = temp.find((arg) => {
        return arg.id === state
    })

    // Function to download the resume as PDF
    const downloadResume = async () => {
        const input = document.getElementById('download');
        html2canvas(input)
            .then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4');
                var width = pdf.internal.pageSize.getWidth();
                var height = pdf.internal.pageSize.getHeight();
                pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
                pdf.save(`${resumename}.pdf`);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <>
            {/*Header Component for navigation */}
            <Navbar />
            {/* Main content */}
            <div
                style={{ display: 'flex', padding: "30px", justifyContent: 'center', alignItems: 'center' }}
                onMouseEnter={handleHover}
                onMouseLeave={handleHoverExit}>
                <div
                    id='download'

                >
                    {state && state.data !== null ? (
                        <div style={{ opacity: isHovered ? 0.7 : 1 }}>{gettemplate.data}</div>
                    ) : (
                        <img style={{ width: '15vw', marginTop: '10vw' }} src={nodata} alt='' />
                    )}
                </div>
                {state && (
                    <Button
                        variant='contained'
                        color='primary'
                        style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: 'translate(-50%, -50%)',
                            alignItems: 'center',
                        }}
                        onClick={downloadResume} //Download the Document
                        onMouseEnter={handleHover} // Handle hover enter event
                        onMouseLeave={handleHoverExit} // Handle hover exit event

                    >
                        <CloudDownloadIcon /> Download
                    </Button>
                )}
            </div>
        </>
    );
}


export default Saveresume;