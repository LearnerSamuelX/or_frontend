import { TextField, InputLabelProps } from '@mui/material';
import React, { useEffect, useState } from 'react';

function ResidentialInfo(): JSX.Element {
    return (
        <div>
            <div className='py-9 text-xl mt-5 font-bold text-left'>
                <h1>Residential Info</h1>
            </div>
            <div>
                <div className='flex flex-row'>
                    <div className='p-5 w-1/5'>
                        <TextField label="Number" variant="outlined" fullWidth />
                    </div>
                    <div className='p-5 w-1/5'>
                        <TextField label="Number" variant="outlined" fullWidth />
                    </div>
                    <div className='p-5 w-3/5'>
                        <TextField label="Street Name" variant="outlined" fullWidth />
                    </div>
                </div>
                <div className='flex flex-row'>
                    <div className='p-5 w-3/5'>
                        <TextField label="PO Box" variant="outlined" fullWidth />
                    </div>
                    <div className='p-5 w-3/5'>
                        <TextField label="City" variant="outlined" fullWidth />
                    </div>
                    <div className='p-5 w-3/5'>
                        <TextField label="Postal Code" variant="outlined" fullWidth />
                    </div>
                    <div className='p-5 w-3/5'>
                        <TextField label="Province" variant="outlined" fullWidth />
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-row mt-5 mx-auto w-3/5'>
                <div className='border border-green-400 rounded-lg bg-green-400 w-1/4 mx-auto text-base p-2 cursor-pointer'>
                    <p className='text-white'>Save</p>
                </div>
                <div className='border border-blue-400 rounded-lg bg-blue-400 w-1/4 mx-auto text-base p-2 cursor-pointer'>
                    <p className='text-white'>Submit</p>
                </div>
            </div> */}
        </div>
    )
}

export default ResidentialInfo