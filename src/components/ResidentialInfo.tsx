import { TextField, InputLabelProps } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Residential } from '../models/models';


function ResidentialInfo(
    { residentialData, onResidentialDataChange }:
        { residentialData: Residential, onResidentialDataChange: (prop: string, value: string) => void }
): JSX.Element {
    return (
        <div>
            <div className='py-9 text-xl mt-5 font-bold text-left'>
                <h1>Residential Info</h1>
            </div>
            <div>
                <div className='flex flex-row'>
                    {/* <div className='p-5 w-1/5'>
                        <TextField label="Number" variant="outlined" fullWidth onChange={(e) => onResidentialDataChange("unitNum", e.target.value)} />
                    </div> */}
                    <div className='p-5 w-1/5'>
                        <TextField label="Number" variant="outlined" fullWidth onChange={(e) => onResidentialDataChange("streetNum", e.target.value)} />
                    </div>
                    <div className='p-5 w-3/5'>
                        <TextField label="Street Name" variant="outlined" fullWidth onChange={(e) => onResidentialDataChange("street", e.target.value)} />
                    </div>
                </div>
                <div className='flex flex-row'>
                    {/* <div className='p-5 w-3/5'>
                        <TextField label="PO Box" variant="outlined" fullWidth onChange={(e) => onResidentialDataChange("street", e.target.value)} />
                    </div> */}
                    <div className='p-5 w-3/5'>
                        <TextField label="City" variant="outlined" fullWidth onChange={(e) => onResidentialDataChange("city", e.target.value)} />
                    </div>
                    <div className='p-5 w-3/5'>
                        <TextField label="Postal Code" variant="outlined" fullWidth onChange={(e) => onResidentialDataChange("postalcode", e.target.value)} />
                    </div>
                    <div className='p-5 w-3/5'>
                        <TextField label="Province" variant="outlined" fullWidth onChange={(e) => onResidentialDataChange("province", e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResidentialInfo