import React from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationInfo } from "../models/models";
import axios from "axios";

function SaveButton(
    { appInfo }:
        { appInfo: ApplicationInfo }
) {
    const navigate = useNavigate()

    const saveApplication = () => {
        const rootURL = process.env.REACT_APP_LOCAL_URL
        const saveAppURL = rootURL + "/save"
        axios.post(saveAppURL, appInfo).then((res) => {
            console.log(res)
            navigate("/")
        }).catch((err) => {
            console.log("ERROR: error in saving application.")
        })
    }

    return (
        <div className='border border-green-400 rounded-lg bg-green-400 w-1/4 mx-auto text-base p-2 cursor-pointer' onClick={() => {
            saveApplication()
        }}>
            <p className='text-white'>Save</p>
        </div>
    )
}

export default SaveButton