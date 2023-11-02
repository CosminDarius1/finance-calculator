import { useState } from "react"

const InputBox = ({onInput,handleChange}) => {


    return (
        <>
            <input type="text" className="col-6 h-25 w-35 p-3" onInput={onInput} onChange={handleChange}/>

        </>
    )
}

export default InputBox