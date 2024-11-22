import { TextField, FormControl, InputLabel, MenuItem } from '@mui/material';
import Select from '@mui/material/Select';
import React, { useEffect, useState } from 'react';
import { ApplicationInfo } from '../models/models';


function PersonalInfo({ personalData, onPersonalDataChange }:
    { personalData: ApplicationInfo, onPersonalDataChange: (prop: string, value: string) => void }
): JSX.Element {
    useEffect(() => {
        // after loading completed set the data to defaultValue attribute of the <TextField />
    })
    return (
        <div>
            <div className='py-9 text-xl mt-5 font-bold text-left'>
                <h1>Personal Information</h1>
            </div>
            <div>
                <div className='flex flex-row'>
                    <div className='p-5'>
                        <TextField
                            label="First Name"
                            variant="outlined"
                            fullWidth
                            defaultValue={
                                personalData.first_name.length === 0 ?
                                    null : personalData.first_name
                            }
                            onChange={(e) => onPersonalDataChange("first_name", e.target.value)}
                        />
                    </div>
                    <div className='p-5'>
                        <TextField
                            label="Middle Name"
                            variant="outlined"
                            fullWidth
                            defaultValue={
                                personalData.middle_name?.length === 0 ?
                                    null : personalData.middle_name
                            }
                            onChange={(e) => onPersonalDataChange("middle_name", e.target.value)}
                        />
                    </div>
                    <div className='p-5'>
                        <TextField
                            label="Last Name"
                            variant="outlined"
                            fullWidth
                            defaultValue={
                                personalData.last_name.length === 0 ?
                                    null : personalData.last_name
                            }
                            onChange={(e) => onPersonalDataChange("last_name", e.target.value)}
                        />
                    </div>
                </div>
                <div className='p-5'>
                    <TextField
                        label="Ontario Driver's License Number"
                        variant="outlined"
                        fullWidth
                        defaultValue={
                            personalData.dl_num.length === 0 ?
                                null : personalData.dl_num
                        }
                        onChange={(e) => onPersonalDataChange("dl_num", e.target.value)}
                    />
                </div>
                <div className='p-5'>
                    <TextField
                        label="Date of Birth"
                        variant="outlined"
                        fullWidth
                        helperText="Format: YYYY-MM-DD"
                        defaultValue={
                            personalData.dob.length === 0 ?
                                null : personalData.dob
                        }
                        onChange={(e) => onPersonalDataChange("dob", e.target.value)}
                    />
                </div>
                <div className='flex flex-row w-3/5 mx-auto'>
                    <div className='m-auto p-5 w-2/5'>
                        <TextField
                            label="Height (cm)"
                            variant="outlined"
                            fullWidth
                            defaultValue={
                                personalData.height === 0 ?
                                    null : personalData.dob
                            }
                            onChange={(e) => onPersonalDataChange("height", e.target.value)}
                        />
                    </div>
                    <div className='m-auto py-5 w-1/4'>
                        <FormControl fullWidth>
                            <InputLabel>Gender</InputLabel>
                            <Select
                                label="Gender"
                                defaultValue={personalData.gender}
                                onChange={(e) => onPersonalDataChange("gender", e.target.value as string)}
                            >
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