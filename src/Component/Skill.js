import { Box, Button, Divider, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setSkills } from '../redux/slice/resumeinfoslice';
import DeleteIcon from '@mui/icons-material/Delete';
import toast from 'react-hot-toast';


const Skills = () => {

    const dispatch = useDispatch();
    const state = useSelector((state) => state.resumeinfo.skills)

    const [skill, setSkill] = useState('')
    const [listskills, setListSkills] = useState([])




    const handleaddnew = () => {
        if (skill === '') {
            toast.error("Fill the input")
        } else {
            dispatch(state === null ? setSkills([...listskills, { id: Date.now(), skills: skill }]) : setSkills([...state, { id: Date.now(), skills: skill }]))
            setSkill('')
            setListSkills([])
        }
    }

    // console.log(listskills)

    const handledelete = (id) => {


        dispatch(setSkills(state.filter((skill) => {
            return skill.id !== id
        })))
    }






    return (
        <Box display={'flex'} sx={{ padding: '15px' }}>

            <Box width={'100%'}>
                <Box sx={{ p: 3 }}>
                    <Typography variant='h4'>
                        Key Skills
                    </Typography>

                </Box>
                <Divider />

                <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                    {state && state.map((val) => {
                        return (<Box key={val.id} display={"flex"} border={"1px solid"} justifyContent={"space-between"} padding={"5px"}>
                            <Typography marginTop={"6px"}>
                                {val.skills}
                            </Typography>

                            <Stack display={"inline"}>
                                <IconButton onClick={() => handledelete(val.id)}>
                                    <DeleteIcon />
                                </IconButton>
                            </Stack>
                        </Box>)
                    })}
                </Box>

                <Box sx={{ p: 3 }}>
                    <Stack direction={'column'} spacing={3} sx={{ py: 3 }}>
                        <TextField
                            // label="Job Title"
                            fullWidth
                            value={skill}
                            onChange={(e) => setSkill(e.target.value)}
                        />

                    </Stack>


                    <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '9px' }}>
                        <Button variant="text" onClick={handleaddnew}>{state === null ? "Add" : "Add new"}</Button>

                    </Box>

                </Box>

            </Box>
        </Box >
    )
}

export default Skills;