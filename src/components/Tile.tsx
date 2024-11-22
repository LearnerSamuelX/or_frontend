import React, { useState, useEffect } from 'react';
import { AppProfile } from '../models/models';
import { useNavigate } from "react-router-dom";


function Tile(props: AppProfile): JSX.Element {
    const [appProfile, setAppProfile] = useState<AppProfile>({
        appID: props.appID.slice(-8),
        appDate: props.appDate,
        appStatus: props.appStatus
    })

    useEffect(() => {
        // console.log(props.appID)
        // console.log(props.appDate)
        // console.log(props.appStatus)

    })

    const navigate = useNavigate()

    return (
        <div className='border border-black flex flex-row text-center' onClick={() => {
            navigate("/application/" + props.appID)
        }}>
            <div className='p-5'>
                <h2>Application ID {appProfile.appID}</h2>
            </div>
            <div className='w-2/5 ml-auto'>
                <div className='p-2'>
                    <h2>App Date</h2>
                </div>
                <div className='p-2'>
                    {props.appStatus === 0 ? <h2>Open</h2> : <h2>Submitted</h2>}
                </div>
            </div>
        </div>
    )
}

export default Tile;