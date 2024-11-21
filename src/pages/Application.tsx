import React, { useState, useEffect } from "react"
import PersonalInfo from "../components/PersonalInfo"
import ResidentialInfo from "../components/ResidentialInfo"
import SaveButton from "../components/SaveButton"
import SubmitButton from "../components/SubmitButton"
import { ApplicationInfo } from "../models/models"
import { useParams } from 'react-router-dom';
import axios from "axios"


function Application() {
    const [appInfo, setAppInfo] = useState<ApplicationInfo>({
        appID: "",
        firstname: "",
        lastname: "",
        middlename: undefined,
        dlNum: "",
        dob: "",
        gender: "M",
        height: 0,

        province: "",
        postalcode: "",
        city: "",
        street: "",
        streetNum: 0
    })
    const [loading, setLoading] = useState<boolean | undefined>(undefined)
    const [found, setFound] = useState<boolean>(false)

    const { appID } = useParams();

    const handleInfoChange = (prop: string, value: string) => {
        setAppInfo((prev) => {
            return {
                ...prev,
                [prop]: value
            }
        });
    };

    useEffect(() => {
        const rootURL = process.env.REACT_APP_LOCAL_URL;
        const getAppURL = rootURL + "/application/" + appID

        setLoading((prev) => {
            return prev = true
        })

        axios.get(getAppURL).then(
            (res) => {
                let obj = res.data
                console.log(obj)
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) { // Check if the property is not inherited
                        handleInfoChange(key, obj[key])
                    }
                }
                setFound((prev) => {
                    return prev = true
                })
            }
        ).catch((err) => {
            console.log(err)
        })

        // console.log(appInfo)
    }, [found])

    return (
        <div className='flex flex-col w-2/5 mx-auto'>
            {
                found === true ?
                    <div>
                        <PersonalInfo personalData={appInfo} onPersonalDataChange={handleInfoChange} />
                        <ResidentialInfo residentialData={appInfo} onResidentialDataChange={handleInfoChange} />
                        <div className='flex flex-row mt-5 mx-auto w-3/5'>
                            <SaveButton />
                            <SubmitButton />
                        </div>
                    </div> :
                    <div className="mt-60 text-2xl">
                        <h1>Application with ID {appID} was not found.</h1>
                    </div>
            }
        </div >
    )
}

export default Application