import { Box, Button, Divider, IconButton, Stack, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { setWorkexp } from '../redux/slice/resumeinfoslice';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';


const Workexp = () => {

    const dispatch = useDispatch()
    const state = useSelector((state) => state.resumeinfo.workexp)


    const [jobtitle, setJobTitle] = useState("")
    const [Organization, setOrganization] = useState("")
    const [startyear, setStartyear] = useState("")
    const [endyear, setEndyear] = useState("")


    const [listworkexp, setListWorkExp] = useState([])

    //to add item function
    const handleaddnew = () => {

        if (jobtitle === '' || Organization === '' || startyear === '' || endyear === '') {
            toast.error("Fill all the component.")
        } else {
            dispatch(state === null ? setWorkexp([...listworkexp, {
                id: Date.now(),
                title: jobtitle,
                Organization: Organization,
                startyear: startyear,
                endyear: endyear,
            }]) : setWorkexp([...state, {
                id: Date.now(),
                title: jobtitle,
                Organization: Organization,
                startyear: startyear,
                endyear: endyear,
            }]))

            setJobTitle("")
            setOrganization("")
            setEndyear("")
            setStartyear("")
            setListWorkExp([])
        }
    }


    //to delete data function
    const handledelete = (id) => {

        dispatch(setWorkexp(state.filter((work) => {
            return work.id !== id
        })))
    }



    return (
        <Box display={'flex'}>

            <Box width={'100%'}>
                <Box sx={{ padding: '15px' }}>
                    <Box sx={{ p: 3 }}>
                        <Typography variant='h4'>
                            Work Expirience
                        </Typography>

                    </Box>
                    <Divider />

                    {/* to show data  */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                        {state && state.map((val) => {
                            return (<Box key={val.id} display={"flex"} border={"1px solid"} justifyContent={"space-between"} padding={"5px"}>
                                <Box>
                                    <Typography marginTop={"6px"}>
                                        Type: {val.title}
                                    </Typography>
                                    <Typography marginTop={"6px"}>
                                        University: {val.Organization}
                                    </Typography>
                                    <Typography marginTop={"6px"}>
                                        Startyear:  {val.startyear}
                                    </Typography>
                                    <Typography marginTop={"6px"}>
                                        Endyear: {val.endyear}
                                    </Typography>
                                </Box>
                                {/* delete data button  */}
                                <Stack display={"inline"}>
                                    <IconButton onClick={() => handledelete(val.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </Stack>
                            </Box>)
                        })}
                    </Box>


                    {/* workexperience input box  */}
                    <Box sx={{ p: 3 }}>

                        <Stack direction={'row'} spacing={3} sx={{ py: 3 }}>
                            <TextField
                                label="Job Title"
                                name='title'
                                fullWidth
                                value={jobtitle}
                                onChange={(e) => setJobTitle(e.target.value)}
                                required
                            />
                            <TextField
                                label="Organization Name"
                                name='Organization'
                                fullWidth
                                value={Organization}
                                onChange={(e) => setOrganization(e.target.value)}
                                required
                            />
                        </Stack>
                        <Stack direction={'row'} spacing={3}>
                            <TextField
                                label="Start year"
                                name='startyear'
                                fullWidth
                                value={startyear}
                                onChange={(e) => setStartyear(e.target.value)}
                                required
                            />
                            <TextField
                                label="End year"
                                name='endyear'
                                fullWidth
                                value={endyear}
                                onChange={(e) => setEndyear(e.target.value)}
                                required
                            />
                        </Stack>



                    </Box>

                    {/* add data button  */}
                    <Box sx={{ display: 'flex', justifyContent: 'center', paddingTop: '9px' }}>
                        <Button variant="text" onClick={handleaddnew}>{state === null ? "Add" : "Add new"}</Button>

                    </Box>


                </Box>
            </Box>
        </Box >
    )
}

export default Workexp