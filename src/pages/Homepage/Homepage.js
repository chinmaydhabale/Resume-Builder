import React, { useState } from 'react'
import temp from '../../data/resumedata'
import Homepagecard from './Homepagecard';
import Navbar from '../../Component/Navbar';

const Homepage = () => {

    const [template, setTemplate] = useState(temp);

    return (
        <div className='template'>
            <Navbar />
            <div>
                <h1>Templates</h1>
                <p>Select a Template to get started</p>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', height: '80vh' }} >
                {template.map((templates) => (
                    <Homepagecard
                        data={templates.data}
                        thumbnail={templates.thumbnail}
                    />
                ))}
            </div>
        </div>
    )
}

export default Homepage