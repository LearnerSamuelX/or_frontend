import React, { useEffect } from "react";
import { ApplicationInfo } from "../models/models";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SubmitButton(
    { appInfo }:
        { appInfo: ApplicationInfo }
) {

    function inputValidator() {
        let validated = true
        for (let key in appInfo) {
            if (appInfo.hasOwnProperty(key)) {
                if (key !== "unit_num" && appInfo[key] === 0) {
                    validated = false
                }

                if (appInfo[key].length === 0 && (key !== "middle_name" && key !== "unit_num")) {
                    validated = false
                }
            }
        }
        return validated
    }

    const navigate = useNavigate()

    function submitInfo() {
        const validationResult = inputValidator()
        if (validationResult) {
            const rootURL = process.env.REACT_APP_LOCAL_URL;
            const submitURL = rootURL + "/submit"
            axios.post(submitURL, appInfo).then((res) => {
                navigate("/")
            }).catch((err) => {
                console.log("ERROR: an error at submitting the application")
                console.log(err)
            })
        } else {
            console.log("ERROR: Inputs are missing")
        }
    }

    return (
        <div className='border border-blue-400 rounded-lg bg-blue-400 w-1/4 mx-auto text-base p-2 cursor-pointer' onClick={() => { submitInfo() }}>
            <p className='text-white'>Submit</p>
        </div>
    )
}

export default SubmitButton