import { TextField, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useEffect, useState } from 'react';


function PersonalInfo(): JSX.Element {
    return (
        <div className='flex flex-col w-2/5 mx-auto'>
            <div className='py-9 text-xl mt-5 font-bold text-left'>
                <h1>Personal Information</h1>
            </div>
            <div>
                <div className='flex flex-row'>
                    <div className='p-5'>
                        <TextField label="First Name" variant="outlined" fullWidth />
                    </div>
                    <div className='p-5'>
                        <TextField label="Middle Name" variant="outlined" fullWidth />
                    </div>
                    <div className='p-5'>
                        <TextField label="Last Name" variant="outlined" fullWidth />
                    </div>
                </div>
                <div className='p-5'>
                    <TextField label="Ontario Driver's License Number" variant="outlined" fullWidth />
                </div>
                <div className='p-5'>
                    <TextField label="Date of Birth" variant="outlined" fullWidth helperText="Format: YYYY-MM-DD" />
                </div>
                <div className='flex flex-row w-3/5 mx-auto'>
                    <div className='m-auto p-5 w-2/5'>
                        <TextField label="Height (cm)" variant="outlined" fullWidth />
                    </div>
                    <div className='m-auto py-5 w-1/4'>
                        <FormControl fullWidth>
                            <InputLabel>Gender</InputLabel>
                            <Select label="Gender">
                                <MenuItem value={"M"}>Male</MenuItem>
                                <MenuItem value={"F"}>Female</MenuItem>
                                <MenuItem value={"X"}>X</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
                <div className='flex flex-row mt-5 mx-auto w-3/5'>
                    <div className='border border-green-400 rounded-lg bg-green-400 w-1/4 mx-auto text-base p-2 cursor-pointer'>
                        <p className='text-white'>Save</p>
                    </div>
                    <div className='border border-blue-400 rounded-lg bg-blue-400 w-1/4 mx-auto text-base p-2 cursor-pointer'>
                        <p className='text-white'>Next</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PersonalInfo