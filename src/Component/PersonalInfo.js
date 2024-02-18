import { Avatar, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './css/Personal.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPersonalInfo } from '../redux/slice/resumeinfoslice'
import toast from 'react-hot-toast'

const PersonalInfo = () => {

    const dispatch = useDispatch()
    const personalinfostate = useSelector((state) => state.resumeinfo.personalinfo)

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



    const handlesubmit = () => {
        if (name === '' || lastName === '' || email === '' || mobile === '' || address === '' || city === '' || state === '' || postalCode === '' || objective === '' || image === '') {
            toast.error("fill all the component")
        } else if (!email.match(emailRegex)) {
            toast.error('please fill valid email')
        } else {

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
    console.log(personalinfostate)

    return (
        <div className='maindivp'>

            {personalinfostate !== null && <h2 style={{ color: 'green', padding: '15px' }}>Submited successfully</h2>}

            <Box className="imgbox">
                <Avatar sx={{ width: 100, height: 100 }} src={image} />
                <TextField className='inputimg' type="file" required onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
            </Box>
            <Box className="maininputbox">
                <Box className='firstinput'>
                    <TextField type="Text" label="name" onChange={(e) => setName(e.target.value)} fullWidth />

                    <TextField type="TextField" label="Lastname" onChange={(e) => setLastName(e.target.value)} fullWidth />
                </Box>
                <Box className="secondinput">
                    <TextField type="TextField" label="email" onChange={(e) => setEmail(e.target.value)} fullWidth />
                    <TextField type="TextField" label="mobile" onChange={(e) => setMobile(e.target.value)} fullWidth />
                </Box>
                <Box className="thirdinput">
                    <TextField type="TextField" label="Address" onChange={(e) => setAddress(e.target.value)} fullWidth />
                </Box>
                <Box className="forthinput">
                    <TextField type="TextField" label="City" onChange={(e) => setCity(e.target.value)} fullWidth />
                    <TextField type="TextField" label="State" onChange={(e) => setState(e.target.value)} fullWidth />
                    <TextField type="TextField" label="Postal Code" onChange={(e) => setPostalCode(e.target.value)} fullWidth />
                </Box>
                <Box className="fifthinput">
                    <TextField type="TextField" label="Objective" onChange={(e) => setObjective(e.target.value)} fullWidth />
                </Box>
            </Box>
            <Box className='psubmitbtn'>
                <Button onClick={handlesubmit} variant={isSubmit ? 'contained' : 'outlined'}>
                    Submit
                </Button>
            </Box>
        </div>
    )
}

export default PersonalInfo