import { TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';


function Application(): JSX.Element {
    return (
        <div className='border border-black flex flex-col w-2/5 mx-auto mt-5'>
            <div className='m-5'>
                <h1>Personal Information</h1>
            </div>
            <div>
                <div className='mb-5 p-5'>
                    <TextField label="First Name" variant="outlined" fullWidth />
                </div>
                <div className='mb-5 p-5'>
                    <TextField label="Middle Name" variant="outlined" fullWidth />
                </div>
                <div className='mb-5 p-5'>
                    <TextField label="Last Name" variant="outlined" fullWidth />
                </div>
                <div className='mb-5 p-5'>
                    <TextField label="Ontario Driver's License Number" variant="outlined" fullWidth />
                </div>
                <div className='mb-5 p-5'>
                    <TextField label="Date of Birth" variant="outlined" fullWidth helperText="YYYY-MM-DD" />
                </div>
            </div>
        </div>
    )
}

export default Application