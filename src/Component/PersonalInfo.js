import { Avatar, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './css/Personal.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPersonalInfo } from '../redux/slice/resumeinfoslice'
import toast from 'react-hot-toast'

const PersonalInfo = () => {

    const dispatch = useDispatch()
    const personalinfostate = useSelector((state) => state.resumeinfo.personalinfo)

    //for submit color change when it triggered
    const [isSubmit, setisSubmit] = useState(false)

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [mobile, setMobile] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [objective, setObjective] = useState("")
    const [image, setImage] = useState("")

    //regex for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;



    //for submit information onclick function
    const handlesubmit = () => {
        if (name === '' || lastName === '' || email === '' || mobile === '' || address === '' || city === '' || state === '' || postalCode === '' || objective === '' || image === '') {
            toast.error("fill all the component")
        } else if (!email.match(emailRegex)) {
            toast.error('please fill valid email')
        } else {
            //dipatch all the data to state
            dispatch(setPersonalInfo({
                name: name,
                lastName: lastName,
                email: email,
                mobile: mobile,
                address: address,
                city: city,
                state: state,
                postalCode: postalCode,
                objective: objective,
                image: image
            }))
            setisSubmit(true)
            toast.success('submited successfully')
        }

    }

    return (
        <div className='maindivp'>

            {/* when we submit detail it show massage its submited or already submited  */}
            {personalinfostate !== null && <h2 style={{ color: 'green', padding: '15px' }}>Submited successfully</h2>}

            <Box className="imgbox">
                <Avatar sx={{ width: 100, height: 100 }} src={image} />
                <TextField className='inputimg' type="file" required onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
            </Box>
            <Box className="maininputbox">
                <Box className='firstinput'>
                    {/* for name input */}
                    <TextField type="text" label="name" onChange={(e) => setName(e.target.value)} fullWidth />

                    {/* for lastname input */}
                    <TextField type="text" label="Lastname" onChange={(e) => setLastName(e.target.value)} fullWidth />
                </Box>
                <Box className="secondinput">
                    {/* for email input  */}
                    <TextField type="email" label="email" onChange={(e) => setEmail(e.target.value)} fullWidth />
                    {/* for mobile input  */}
                    <TextField type="tel" label="mobile" onChange={(e) => setMobile(e.target.value)} fullWidth />
                </Box>
                <Box className="thirdinput">
                    {/* for address input  */}
                    <TextField type="text" label="Address" onChange={(e) => setAddress(e.target.value)} fullWidth />
                </Box>
                <Box className="forthinput">
                    {/* for city input  */}
                    <TextField type="text" label="City" onChange={(e) => setCity(e.target.value)} fullWidth />
                    {/* for state input  */}
                    <TextField type="text" label="State" onChange={(e) => setState(e.target.value)} fullWidth />
                    {/* for postal code input  */}
                    <TextField type="text" label="Postal Code" onChange={(e) => setPostalCode(e.target.value)} fullWidth />
                </Box>
                <Box className="fifthinput">
                    {/* for Objective input  */}
                    <TextField type="text" label="Objective" onChange={(e) => setObjective(e.target.value)} fullWidth />
                </Box>
            </Box>
            {/* for submit information button  */}
            <Box className='psubmitbtn'>
                <Button onClick={handlesubmit} variant={isSubmit ? 'contained' : 'outlined'}>
                    Submit
                </Button>
            </Box>
        </div>
    )
}

export default PersonalInfo