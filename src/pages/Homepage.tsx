import React, { useEffect, useState } from 'react';
import Tile from '../components/Tile';
import { AppProfile } from '../models/models';
import axios from 'axios';

function Homepage(): JSX.Element {

    const [appList, setAppList] = useState<AppProfile[]>([])
    useEffect(() => {
        const rootURL = process.env.REACT_APP_LOCAL_URL;
        const getAppsURL = rootURL + "/applications"
        axios.get(getAppsURL).then(
            (res) => setAppList((prev) => {
                prev = res.data
                return prev
            })
        ).catch((err) => {
            console.log(err)
        })
    }, [])

    return (
        <div>
            <div className='p-9 text-2xl m-5'>
                <h1>Ontario Driver's License Application</h1>
            </div>
            <div className='border border-black p-9 m-5'>
                {
                    appList.length === 0 ?

                        <h2>No Application Created</h2>
                        : <Tile />
                }
            </div>
            <div className='border border-black rounded-lg w-40 mx-auto text-base p-2'>
                <p>New Application</p>
            </div>
        </div>
    )
}

export default Homepage;