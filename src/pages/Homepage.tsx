import React, { useEffect, useState } from 'react';
import Tile from '../components/Tile';
import { AppProfileDB } from '../models/models';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Homepage(): JSX.Element {

    const [appList, setAppList] = useState<AppProfileDB[]>([])
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

    const navigate = useNavigate()

    return (
        <div>
            <div className='p-9 text-2xl m-5 font-bold'>
                <h1>Ontario Driver's License Application</h1>
            </div>
            <div className='p-9 mx-auto my-5 w-2/5'>
                {
                    appList.length === 0 ?

                        <h2>No Application Created</h2>
                        :
                        appList.map((app) => {
                            return <div className='cursor-pointer mb-6'>
                                <Tile appID={app["app_id"]} appStatus={app["app_status"]} appDate={app["change_date"]} />
                            </div>
                        })
                }
            </div>
            <div className='border border-blue-400 rounded-lg bg-blue-400 w-40 mx-auto text-base p-2 cursor-pointer' onClick={() => {
                const rootURL = process.env.REACT_APP_LOCAL_URL;
                const createAppURL = rootURL + "/create"
                axios.post(createAppURL).then((res) => {
                    const rawData = res.data
                    navigate("/application/" + rawData.app_id)
                })
            }}>
                <p className='text-white'>New Application</p>
            </div>
        </div >
    )
}

export default Homepage;