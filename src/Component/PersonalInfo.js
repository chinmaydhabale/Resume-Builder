
import { Box, Button, TextField, IconButton, Avatar, Stack, FormControl } from '@mui/material'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setPersonalInfo } from '../redux/slice/resumeinfoslice';
import { setprofile } from '../redux/slice/resumeinfoslice';
import toast from 'react-hot-toast';



function PersonalInfo() {

    const dispatch = useDispatch();
    const state = useSelector((state) => state)
    const [submitcolor, setsubmitcolor] = useState(false)
    const [isSubmited, setisSubmited] = useState(true)


    const [user, setUser] = useState({
        name: "",
        lastName: "",
        email: "",
        mobile: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        objective: "",
    });

    const [image, setImage] = useState("")



    // get input value and save to state 
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUser({ ...user, [name]: value });
    };


    // Save user information
    const handlesubmit = (e) => {
        e.preventDefault();
        dispatch(setPersonalInfo(user))
        dispatch(dispatch(setprofile(image)))
        toast.success("submited")
        setsubmitcolor(true)
        setisSubmited(false)
    };

    // for edit the data 
    const handlEdit = (e) => {
        setisSubmited(true)
    }


    return (


        <Box sx={{ border: "1px solid" }} >

            {isSubmited ? "" : state.resumeinfo.personalinfo && <Box>
                <li>Name:{state.resumeinfo.personalinfo.name} </li>
                <li>Lastname:{state.resumeinfo.personalinfo.lastName} </li>
                <li>email:{state.resumeinfo.personalinfo.email} </li>
                <li>Mobile:{state.resumeinfo.personalinfo.mobile} </li>
                <li>Address:{state.resumeinfo.personalinfo.address} </li>
                <li>City:{state.resumeinfo.personalinfo.city} </li>
                <li>State:{state.resumeinfo.personalinfo.state} </li>
                <li>Postal Code:{state.resumeinfo.personalinfo.postalCode} </li>
                <li>Objective:{state.resumeinfo.personalinfo.objective} </li>
            </Box>}

            {isSubmited && <form onSubmit={handlesubmit}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: "15px", }}>


                    <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                        <Avatar sx={{ width: 100, height: 100 }} src={image} />
                        <IconButton >
                            <TextField type="file" required onChange={(e) => setImage(URL.createObjectURL(e.target.files[0]))} />
                        </IconButton>
                    </Box>
                    <Stack direction={'row'} spacing={3}>
                        {/* for name  */}
                        <TextField
                            label="Name"
                            name="name"
                            value={user.name}
                            onChange={handleInputChange}
                            fullWidth
                            required

                        />
                        {/* for lastname  */}
                        <TextField
                            label="Last Name"
                            name="lastName"
                            value={user.lastName}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Stack>
                    <Stack direction={'row'} spacing={3}>
                        {/* for emali  */}
                        <TextField
                            label="Email"
                            name="email"
                            type='email'
                            value={user.email}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                        {/* for mobile number  */}
                        <TextField
                            label="Mobile"
                            name="mobile"
                            type='tel'
                            value={user.mobile}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Stack>
                    {/* for address  */}
                    <TextField
                        label="Address"
                        name="address"
                        value={user.address}
                        onChange={handleInputChange}
                        fullWidth
                        required
                    />
                    {/* for city  */}
                    <Stack direction={'row'} spacing={3}>
                        <TextField
                            label="city"
                            name="city"
                            value={user.city}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                        {/* for state  */}
                        <TextField
                            label="state"
                            name="state"
                            value={user.state}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                        {/* for postalcode  */}
                        <TextField
                            label="Postal code"
                            name="postalCode"
                            value={user.postalCode}
                            onChange={handleInputChange}
                            fullWidth
                            required
                        />
                    </Stack>
                    {/* for bio  */}
                    <TextField
                        label="Objective"
                        name="objective"
                        value={user.objective}
                        onChange={handleInputChange}
                        multiline
                        fullWidth
                        required
                    />
                    <Box sx={{ display: "flex", mt: 3, margin: "5px", alignItems: "center", justifyContent: "center" }}>

                        {isSubmited ? (<Button type='submit' variant={submitcolor ? 'contained' : 'outlined'}>Submit</Button>) : ""}
                    </Box>
                </Box>
            </form>}
            <Box sx={{ display: "flex", mt: 3, margin: "5px", alignItems: "center", justifyContent: "center" }}>

                {isSubmited ? "" : (<Button onClick={handlEdit} variant={submitcolor ? 'contained' : 'outlined'}>Edit</Button>)}
            </Box>

        </Box>
    );
}

export default PersonalInfo;