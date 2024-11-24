import React, { useState, useEffect } from "react"
import PersonalInfo from "../components/PersonalInfo"
import ResidentialInfo from "../components/ResidentialInfo"
import SaveButton from "../components/SaveButton"
import SubmitButton from "../components/SubmitButton"
import { ApplicationInfo } from "../models/models"
import { useParams } from 'react-router-dom';
import axios from "axios"


function Application(): JSX.Element {
    const [appInfo, setAppInfo] = useState<ApplicationInfo>({
        app_id: "",
        first_name: "",
        last_name: "",
        middle_name: undefined,
        dl_num: "",
        dob: "",
        gender: "M",
        height: 0,

        province: "",
        postalcode: "",
        city: "",
        street: "",
        street_num: 0,
        unit_num: 0
    })
    const [error, setError] = useState<boolean>(false)
    const [found, setFound] = useState<boolean>(false)
    const { appID } = useParams();

    useEffect(() => {
        const rootURL = process.env.REACT_APP_LOCAL_URL;
        const getAppURL = rootURL + "/application/" + appID

        axios.get(getAppURL).then(
            (res) => {
                let obj = res.data
                for (let key in obj) {
                    if (obj.hasOwnProperty(key)) {
                        handleInfoChange(key, obj[key])
                    }
                }
                setFound((prev) => {
                    return prev = true
                })

                setError((prev) => {
                    return prev = false
                })
            }
        ).catch((err) => {
            console.log(err)
            setError((prev) => {
                return prev = true
            })
        })
    }, [found])

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
            {!error ?
                <div>
                    {
                        found === true ?
                            <div>
                                <PersonalInfo personalData={appInfo} onPersonalDataChange={handleInfoChange} />
                                <ResidentialInfo residentialData={appInfo} onResidentialDataChange={handleInfoChange} />
                                <div className='flex flex-row mt-5 mx-auto w-3/5'>
                                    <SaveButton appInfo={appInfo} />
                                    <SubmitButton appInfo={appInfo} />
                                </div>
                            </div> :
                            <div className="mt-60 text-2xl">
                                <h1>Loading...</h1>
                            </div>
                    }
                </div> :
                <div className="mt-60 text-2xl">
                    <h1>Application with ID {appID} is not found</h1>
                </div>
            }
        </div >
    )
}

export default Application