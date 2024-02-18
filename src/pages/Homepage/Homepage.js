import React from 'react'
import temp from '../../data/resumedata'
import Homepagecard from './Homepagecard';
import Navbar from '../../Component/Navbar';
import './Homepage.css'

const Homepage = () => {



    return (
        <div className='template'>
            <Navbar />
            <div style={{ padding: '15px' }}>
                <h1>Templates</h1>
                <p>Select a Template to get started</p>
            </div>
            <div className='AllTemplates' >
                {temp.map((templates) => (
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