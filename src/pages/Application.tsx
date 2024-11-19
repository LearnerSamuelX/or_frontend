import React, { useState, useEffect } from "react"
import PersonalInfo from "../components/PersonalInfo"
import ResidentialInfo from "../components/ResidentialInfo"
import SaveButton from "../components/SaveButton"
import SubmitButton from "../components/SubmitButton"


function Application() {
    useEffect(() => {

    })
    return (
        <div className='flex flex-col w-2/5 mx-auto'>
            <PersonalInfo />
            <ResidentialInfo />
            <div className='flex flex-row mt-5 mx-auto w-3/5'>
                <SaveButton />
                <SubmitButton />
            </div>
        </div >
    )
}

export default Application