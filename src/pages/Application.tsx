import React, { useState, useEffect } from "react"
import PersonalInfo from "../components/PersonalInfo"
import ResidentialInfo from "../components/ResidentialInfo"
import SaveButton from "../components/SaveButton"
import SubmitButton from "../components/SubmitButton"
import { ApplicationInfo } from "../models/models"
import { useParams } from 'react-router-dom';


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

    const { appID } = useParams();

    useEffect(() => {
        // console.log(appID) // use this ID to retrieve application
    })

    const handleInfoChange = (prop: string, value: string) => {
        setAppInfo((prev) => {
            return {
                ...prev,
                [prop]: value
            }
        });
    };

    return (
        <div className='flex flex-col w-2/5 mx-auto'>
            <PersonalInfo personalData={appInfo} onPersonalDataChange={handleInfoChange} />
            <ResidentialInfo />
            <div className='flex flex-row mt-5 mx-auto w-3/5'>
                <SaveButton />
                <SubmitButton />
            </div>
        </div >
    )
}

export default Application