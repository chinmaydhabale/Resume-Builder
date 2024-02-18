import { Box, Button, Divider, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEducation } from '../redux/slice/resumeinfoslice'
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';


const Education = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.resumeinfo.Education)


    const [type, setType] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const [startyear, setStartyear] = useState("")
    const [endyear, setEndyear] = useState("")


    const [listeducation, setListeducation] = useState([])


    //for add new item
    const handleaddnew = () => {

        if (type === '' || university === '' || degree === '' || startyear === '' || endyear === '') {
            toast.error("Fill all the data")
        } else {
            //dispatch the data
            dispatch(state === null ? setEducation([...listeducation, {
                id: Date.now(),
                type: type,
                university: university,
                degree: degree,
                startyear: startyear,
                endyear: endyear,
            }]) : setEducation([...state, {
                id: Date.now(),
                type: type,
                university: university,
                degree: degree,
                startyear: startyear,
                endyear: endyear,
            }]))
            setType('')
            setUniversity('')
            setDegree('')
            setStartyear('')
            setEndyear('')
            setListeducation([])
        }
    }


    //for delete
    const handledelete = (id) => {
        dispatch(setEducation(state.filter((edu) => {
            return edu.id !== id
        })))
    }




    return (
        <Stack direction={'row'} >

            <Box padding={'15px'} width={'100%'}>
                <Box sx={{ p: 3 }}>
                    <Typography variant='h4'>
                        Education Detail
                    </Typography>

                </Box>
                <Divider />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {/* show added data */}
                    {state && state.map((val) => {
                        return (<Box key={val.id} display={"flex"} border={"1px solid"} justifyContent={"space-between"} padding={"5px"}>
                            <Box>
                                <Typography marginTop={"6px"}>
                                    Type: {val.type}
                                </Typography>
                                <Typography marginTop={"6px"}>
                                    University: {val.university}
                                </Typography>
                                <Typography marginTop={"6px"}>
                                    Degree:  {val.degree}
                                </Typography>
                                <Typography marginTop={"6px"}>
                                    Startyear:  {val.startyear}
                                </Typography>
                                <Typography marginTop={"6px"}>
                                    Endyear: {val.endyear}
                                </Typography>
                            </Box>
                            {/* To delete data */}
                            <Stack display={"inline"}>
                                <IconButton onClick={() => handledelete(val.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        </Box>)
                    })}
                </Box>

                {/* for Education input  */}
                <Box sx={{ p: 3 }}>
                    <TextField
                        label="Type"
                        fullWidth
                        placeholder='Graduation'
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                        required
                    />
                    <Stack direction={'row'} spacing={3} sx={{ py: 3 }}>
                        <TextField
                            label="University"
                            fullWidth
                            placeholder='Select University'
                            value={university}
                            onChange={(e) => setUniversity(e.target.value)}

                        />
                        <TextField
                            label="Degree"
                            fullWidth
                            placeholder='Select Degree'
                            value={degree}
                            onChange={(e) => setDegree(e.target.value)}

                        />
                    </Stack>
                    <Stack direction={'row'} spacing={3}>
                        <TextField
                            label="Start year"
                            fullWidth
                            value={startyear}
                            onChange={(e) => setStartyear(e.target.value)}

                        />
                        <TextField
                            label="End Year"
                            fullWidth
                            value={endyear}
                            onChange={(e) => setEndyear(e.target.value)}

                        />

                    </Stack>
                </Box>

                {/* for submit button  */}
                <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '9px' }}>
                    <Button variant="text" onClick={handleaddnew}>{state === null ? "Add" : "Add new"}</Button>
                </Box>

            </Box>
        </Stack >
    )
}

export default Education;