// import { Avatar, Box, Button, TextField } from '@mui/material'
// import React, { useState } from 'react'
// import './css/Personal.css'
// import { useDispatch, useSelector } from 'react-redux'
// import { setPersonalInfo } from '../redux/slice/resumeinfoslice'
// import toast from 'react-hot-toast'

// const PersonalInfo = () => {

//     const dispatch = useDispatch()
//     const personalinfostate = useSelector((state) => state.resumeinfo.personalinfo)

//     //for submit color change when it triggered
//     const [isSubmit, setisSubmit] = useState(false)

//     const [name, setName] = useState("")
//     const [lastName, setLastName] = useState("")
//     const [email, setEmail] = useState("")
//     const [mobile, setMobile] = useState("")
//     const [address, setAddress] = useState("")
//     const [city, setCity] = useState("")
//     const [state, setState] = useState("")
//     const [postalCode, setPostalCode] = useState("")
//     const [objective, setObjective] = useState("")
//     const [image, setImage] = useState("")

//     //regex for email validation
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;



//     //for submit information onclick function
//     const handlesubmit = () => {
//         if (name === '' || lastName === '' || email === '' || mobile === '' || address === '' || city === '' || state === '' || postalCode === '' || objective === '') {
//             toast.error("fill all the component")
//         } else if (!email.match(emailRegex)) {
//             toast.error('please fill valid email')
//         } else if (image === '') {
//             toast.error('please upload a photo')
//         } else {
//             //dipatch all the data to state
//             dispatch(setPersonalInfo({
//                 name: name,
//                 lastName: lastName,
//                 email: email,
//                 mobile: mobile,
//                 address: address,
//                 city: city,
//                 state: state,
//                 postalCode: postalCode,
//                 objective: objective,
//                 image: image
//             }))
//             setisSubmit(true)
//             toast.success('submited successfully')
//         }

//     }

//     return (
//         <Box className='maindivp'>

//             {/* when we submit detail it show massage its submited or already submited  */}
//             {personalinfostate !== null && <h2 style={{ color: 'green', padding: '15px' }}>Submited successfully</h2>}

//             <Box className="imgbox">
//                 <Avatar sx={{ width: 100, height: 100 }} src={image} />
//                 <TextField className='inputimg' type="file" required onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
//             </Box>
//             <Box className="maininputbox">
//                 <Box className='firstinput'>
//                     {/* for name input */}
//                     <TextField type="text" label="name" onChange={(e) => setName(e.target.value)} fullWidth required />

//                     {/* for lastname input */}
//                     <TextField type="text" label="Lastname" onChange={(e) => setLastName(e.target.value)} fullWidth required />
//                 </Box>
//                 <Box className="secondinput">
//                     {/* for email input  */}
//                     <TextField type="email" label="email" onChange={(e) => setEmail(e.target.value)} fullWidth required />
//                     {/* for mobile input  */}
//                     <TextField type="tel" label="mobile" onChange={(e) => setMobile(e.target.value)} fullWidth required />
//                 </Box>
//                 <Box className="thirdinput">
//                     {/* for address input  */}
//                     <TextField type="text" label="Address" onChange={(e) => setAddress(e.target.value)} fullWidth required />
//                 </Box>
//                 <Box className="forthinput">
//                     {/* for city input  */}
//                     <TextField type="text" label="City" onChange={(e) => setCity(e.target.value)} fullWidth required />
//                     {/* for state input  */}
//                     <TextField type="text" label="State" onChange={(e) => setState(e.target.value)} fullWidth required />
//                     {/* for postal code input  */}
//                     <TextField type="text" label="Postal Code" onChange={(e) => setPostalCode(e.target.value)} fullWidth required />
//                 </Box>
//                 <Box className="fifthinput">
//                     {/* for Objective input  */}
//                     <TextField type="text" label="Objective" onChange={(e) => setObjective(e.target.value)} fullWidth required />
//                 </Box>
//             </Box>
//             {/* for submit information button  */}
//             <Box className='psubmitbtn'>
//                 <Button onClick={handlesubmit} variant={isSubmit ? 'contained' : 'outlined'}>
//                     Submit
//                 </Button>
//             </Box>
//         </Box>
//     )
// }

// export default PersonalInfo


import { Avatar, Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import './css/Personal.css'
import { useDispatch, useSelector } from 'react-redux'
import { setPersonalInfo } from '../redux/slice/resumeinfoslice'
import toast from 'react-hot-toast'

const PersonalInfo = () => {
    const dispatch = useDispatch()
    const personalinfostate = useSelector((state) => state.resumeinfo.personalinfo)

    // for submit color change when it triggered
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
    const [image, setImage] = useState("") // Changed to an empty string

    // regex for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // for submit information onclick function
    const handlesubmit = () => {
        if (name === '' || lastName === '' || email === '' || mobile === '' || address === '' || city === '' || state === '' || postalCode === '' || objective === '') {
            toast.error("fill all the components")
        } else if (!email.match(emailRegex)) {
            toast.error('please fill valid email')
        } else if (image === '') {
            toast.error('please upload a photo')
        } else {
            // dispatch all the data to state
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
                image: image // Save the image data
            }))
            setisSubmit(true)
            toast.success('submitted successfully')
        }
    }

    // Function to handle file input change
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage(reader.result) // Set the image data as a Base64 string
            }
            reader.readAsDataURL(file)
        }
    }

    return (
        <Box className='maindivp'>
            {/* when we submit detail it shows message it's submitted or already submitted */}
            {personalinfostate !== null && <h2 style={{ color: 'green', padding: '15px' }}>Submitted successfully</h2>}
            <Box className="imgbox">
                <Avatar sx={{ width: 100, height: 100 }} src={image} />
                <TextField className='inputimg' type="file" required onChange={handleFileChange} />
            </Box>
            <Box className="maininputbox">
                <Box className='firstinput'>
                    {/* for name input */}
                    <TextField type="text" label="name" onChange={(e) => setName(e.target.value)} fullWidth required />
                    {/* for lastname input */}
                    <TextField type="text" label="Lastname" onChange={(e) => setLastName(e.target.value)} fullWidth required />
                </Box>
                <Box className="secondinput">
                    {/* for email input  */}
                    <TextField type="email" label="email" onChange={(e) => setEmail(e.target.value)} fullWidth required />
                    {/* for mobile input  */}
                    <TextField type="tel" label="mobile" onChange={(e) => setMobile(e.target.value)} fullWidth required />
                </Box>
                <Box className="thirdinput">
                    {/* for address input  */}
                    <TextField type="text" label="Address" onChange={(e) => setAddress(e.target.value)} fullWidth required />
                </Box>
                <Box className="forthinput">
                    {/* for city input  */}
                    <TextField type="text" label="City" onChange={(e) => setCity(e.target.value)} fullWidth required />
                    {/* for state input  */}
                    <TextField type="text" label="State" onChange={(e) => setState(e.target.value)} fullWidth required />
                    {/* for postal code input  */}
                    <TextField type="text" label="Postal Code" onChange={(e) => setPostalCode(e.target.value)} fullWidth required />
                </Box>
                <Box className="fifthinput">
                    {/* for Objective input  */}
                    <TextField type="text" label="Objective" onChange={(e) => setObjective(e.target.value)} fullWidth required />
                </Box>
            </Box>
            {/* for submit information button  */}
            <Box className='psubmitbtn'>
                <Button onClick={handlesubmit} variant={isSubmit ? 'contained' : 'outlined'}>
                    Submit
                </Button>
            </Box>
        </Box>
    )
}

export default PersonalInfo
