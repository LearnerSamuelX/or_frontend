import { TextField, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import React, { useEffect, useState } from 'react';
import { Personal } from '../models/models';


function PersonalInfo({ personalData, onPersonalDataChange }: {
    personalData: Personal, onPersonalDataChange: (prop: string, value: string) => void
}): JSX.Element {
    return (
        <div>
            <div className='py-9 text-xl mt-5 font-bold text-left'>
                <h1>Personal Information</h1>
            </div>
            <div>
                <div className='flex flex-row'>
                    <div className='p-5'>
                        <TextField label="First Name" variant="outlined" fullWidth onChange={(e) => onPersonalDataChange("firstname", e.target.value)} />
                    </div>
                    <div className='p-5'>
                        <TextField label="Middle Name" variant="outlined" fullWidth onChange={(e) => onPersonalDataChange("middlename", e.target.value)} />
                    </div>
                    <div className='p-5'>
                        <TextField label="Last Name" variant="outlined" fullWidth onChange={(e) => onPersonalDataChange("lastname", e.target.value)} />
                    </div>
                </div>
                <div className='p-5'>
                    <TextField label="Ontario Driver's License Number" variant="outlined" fullWidth onChange={(e) => onPersonalDataChange("dlNum", e.target.value)} />
                </div>
                <div className='p-5'>
                    <TextField label="Date of Birth" variant="outlined" fullWidth helperText="Format: YYYY-MM-DD" onChange={(e) => onPersonalDataChange("dob", e.target.value)} />
                </div>
                <div className='flex flex-row w-3/5 mx-auto'>
                    <div className='m-auto p-5 w-2/5'>
                        <TextField label="Height (cm)" variant="outlined" fullWidth />
                    </div>
                    <div className='m-auto py-5 w-1/4'>
                        <FormControl fullWidth>
                            <InputLabel>Gender</InputLabel>
                            <Select label="Gender" onChange={(e) => onPersonalDataChange("gender", e.target.value as string)}>
                                <MenuItem value={"M"}>Male</MenuItem>
                                <MenuItem value={"F"}>Female</MenuItem>
                                <MenuItem value={"X"}>X</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default PersonalInfo