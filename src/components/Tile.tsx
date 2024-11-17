import { TextField } from '@mui/material';
import React, { useState, ChangeEvent } from 'react';


function Tile(): JSX.Element {
    const [inputValue, setInputValue] = useState("")

    function textValue(event: ChangeEvent<HTMLInputElement>) {
        setInputValue((prev) => {
            prev = event.target.value
            console.log(prev)
            return prev
        })
    }

    return (
        <div className='border border-black'>
            <TextField id="filled-basic" label="Filled" variant="outlined" fullWidth onChange={textValue} />
        </div>
    )
}

export default Tile;