import React, { useState } from 'react';
import { AppProfile } from '../models/models';
import { useNavigate } from "react-router-dom";


function Tile(props: AppProfile): JSX.Element {
    const [appProfile, setAppProfile] = useState<AppProfile>({
        appID: props.appID.slice(-8),
        appDate: props.appDate,
        appStatus: props.appStatus
    })

    const navigate = useNavigate()

    function dateConverter(timestamp: number): string {
        const date = new Date(timestamp * 1000)
        const formattedDate = date.toISOString().split('T')[0]
        return formattedDate
    }

    return (
        <div className='border border-black rounded-lg flex flex-row text-center' onClick={() => {
            if (props.appStatus === 0) {
                navigate("/application/" + props.appID)
            }
        }}>
            <div className='p-5'>
                <h2>Application ID {appProfile.appID}</h2>
            </div>
            <div className='w-2/5 ml-auto'>
                <div className='p-2'>
                    <h2>{dateConverter(props.appDate)}</h2>
                </div>
                <div className='p-2'>
                    {props.appStatus === 0 ? <h2 className='text-yellow-500'>Open</h2> : <h2 className='text-emerald-500'>Submitted</h2>}
                </div>
            </div>
        </div>
    )
}

export default Tile;