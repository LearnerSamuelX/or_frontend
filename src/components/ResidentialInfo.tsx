import { TextField } from '@mui/material';
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
                    <div className='p-5 w-2/5'>
                        <TextField
                            label="Unit Number"
                            variant="outlined"
                            fullWidth
                            defaultValue={
                                residentialData.unit_num < 1 ? null : residentialData.unit_num
                            }
                            onChange={(e) => onResidentialDataChange("unit_num", e.target.value)}
                        />
                    </div>
                    <div className='p-5 w-2/5'>
                        <TextField
                            label="Street Number"
                            variant="outlined"
                            fullWidth
                            defaultValue={
                                residentialData.street_num < 1 ? null : residentialData.street_num
                            }
                            onChange={(e) => onResidentialDataChange("street_num", e.target.value)}
                        />
                    </div>
                    <div className='p-5 w-3/5'>
                        <TextField
                            label="Street Name"
                            variant="outlined"
                            fullWidth
                            defaultValue={
                                residentialData.street.length === 0 ? null : residentialData.street
                            }
                            onChange={(e) => onResidentialDataChange("street", e.target.value)}
                        />
                    </div>
                </div>
                <div className='flex flex-row'>
                    {/* <div className='p-5 w-3/5'>
                        <TextField label="PO Box" variant="outlined" fullWidth onChange={(e) => onResidentialDataChange("street", e.target.value)} />
                    </div> */}
                    <div className='p-5 w-3/5'>
                        <TextField
                            label="City"
                            variant="outlined"
                            fullWidth
                            defaultValue={
                                residentialData.city.length === 0 ? null : residentialData.city
                            }
                            onChange={(e) => onResidentialDataChange("city", e.target.value)} />
                    </div>
                    <div className='p-5 w-3/5'>
                        <TextField
                            label="Postal Code"
                            variant="outlined"
                            fullWidth
                            defaultValue={
                                residentialData.postalcode.length === 0 ? null : residentialData.postalcode
                            }
                            onChange={(e) => onResidentialDataChange("postalcode", e.target.value)} />
                    </div>
                    <div className='p-5 w-3/5'>
                        <TextField
                            label="Province"
                            variant="outlined"
                            fullWidth
                            defaultValue={
                                residentialData.province.length === 0 ? null : residentialData.province
                            }
                            onChange={(e) => onResidentialDataChange("province", e.target.value)} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ResidentialInfo