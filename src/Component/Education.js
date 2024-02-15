import { Box, Button, Divider, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setEducation } from '../redux/slice/resumeinfoslice'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import toast from 'react-hot-toast';


const Education = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.resumeinfo.Education)
    const [submited, setSubmited] = useState(true)


    const [type, setType] = useState("")
    const [university, setUniversity] = useState("")
    const [degree, setDegree] = useState("")
    const [startyear, setStartyear] = useState("")
    const [endyear, setEndyear] = useState("")

    // const [educationdetail, setEducationDetail] = useState({
    //     id: "",
    //     type: "",
    //     university: "",
    //     degree: "",
    //     startyear: "",
    //     endyear: "",
    // })

    const [listeducation, setListeducation] = useState([])

    // console.log(listeducation)
    const handleaddnew = () => {

        if (type === '' || university === '' || degree === '' || startyear === '' || endyear === '') {
            toast.error("Fill all the data")
        } else {
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
        }
    }


    const handledelete = (id) => {
        dispatch(setEducation(state.filter((edu) => {
            return edu.id !== id
        })))
    }

    const handlesubmit = (e) => {
        e.preventDefault();
        if (state === null) {
            toast.error("Add the data first")

        } else {

            setSubmited(false)
        }
    }

    const onEdit = (e) => {
        setSubmited(true)
    }

    console.log(state)

    return (
        <Stack direction={'row'} >



            <Box border={1} width={'100%'}>
                <Box sx={{ p: 3 }}>
                    <Typography variant='h4'>
                        Education Detail
                    </Typography>

                </Box>
                <Divider />

                <Box>
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
                            {submited && <Stack display={"inline"}>
                                <IconButton onClick={() => handledelete(val.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>}
                        </Box>)
                    })}
                </Box>


                {submited && <Box sx={{ p: 3 }}>
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
                </Box>}

                {submited && <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '9px' }}>
                    {state === null ? (<Button variant="text" onClick={handleaddnew}>Add</Button>) : (<Button variant="text" onClick={handleaddnew}>Add new</Button>)}

                </Box>}
                <Box sx={{ display: "flex", mt: 3, margin: "5px", alignItems: "center", justifyContent: "center" }}>
                    {submited ? (<Button onClick={handlesubmit} variant='contained'>Submit</Button>) : (<Button onClick={onEdit} variant='contained'>Edit</Button>)}
                </Box>
            </Box>
        </Stack >
    )
}

export default Education;