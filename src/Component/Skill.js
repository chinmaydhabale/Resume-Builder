import { Box, Button, Divider, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSkills } from '../redux/slice/resumeinfoslice';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import toast from 'react-hot-toast';


const Skills = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.resumeinfo.skills)

    const [submited, setSubmited] = useState(true)
    const [skill, setSkill] = useState('')
    const [listskills, setListSkills] = useState([])




    const handleaddnew = () => {
        if (skill === '') {
            toast.error("Fill the input")
        } else {
            dispatch(state === null ? setSkills([...listskills, { id: Date.now(), skills: skill }]) : setSkills([...state, { id: Date.now(), skills: skill }]))
            setSkill('')
        }
    }

    // console.log(listskills)

    const handledelete = (id) => {


        dispatch(setSkills(state.filter((skill) => {
            return skill.id !== id
        })))
    }

    const handleEdit = () => {

    }


    const handlesubmit = (e) => {
        e.preventDefault()
        // dispatch(state === null ? setSkills([...listskills, skill]) : setSkills([...state, skill]))
        if (state === null) {
            toast.error("Add skills first.")
        } else {

            setSubmited(false)
        }
    }

    const onEdit = (e) => {
        setSubmited(true)
    }



    return (
        <Box display={'flex'}>

            <Box border={1} width={'100%'}>
                <Box sx={{ p: 3 }}>
                    <Typography variant='h4'>
                        Key Skills
                    </Typography>

                </Box>
                <Divider />

                <Box>
                    {state && state.map((val) => {
                        return (<Box key={val.id} display={"flex"} border={"1px solid"} justifyContent={"space-between"} padding={"5px"}>
                            <Typography marginTop={"6px"}>
                                {val.skills}
                            </Typography>

                            {submited && <Stack display={"inline"}>
                                <IconButton onClick={() => handledelete(val.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>}
                        </Box>)
                    })}
                </Box>

                <Box sx={{ p: 3 }}>
                    {submited && <Stack direction={'column'} spacing={3} sx={{ py: 3 }}>
                        <TextField
                            // label="Job Title"
                            fullWidth
                            value={skill}
                            onChange={(e) => setSkill(e.target.value)}
                        />

                    </Stack>
                    }

                    {submited && <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '9px' }}>
                        {state === null ? (<Button variant="text" onClick={handleaddnew}>Add</Button>) : (<Button variant="text" onClick={handleaddnew}>Add new</Button>)}

                    </Box>}

                </Box>
                <Box sx={{ display: "flex", mt: 3, margin: "5px", alignItems: "center", justifyContent: "center" }}>
                    {submited ? (<Button onClick={handlesubmit} variant='contained'>Submit</Button>) : (<Button onClick={onEdit} variant='contained'>Edit</Button>)}
                </Box>
            </Box>
        </Box >
    )
}

export default Skills;