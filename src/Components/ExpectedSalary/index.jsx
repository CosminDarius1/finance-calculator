import InputBox from "../InputBox"
import {useState} from "react";

const ExpectedSalary = ({handleInput, error}) => {
    // const[validationMessage, setValidationMessage] =useState('')
    // const handleChange = (e) => {
    //     const value = e.target.value;
    //     const onlyNumbers = /^[0-9\b]+$/;
    //     if(!value.match(onlyNumbers)){
    //         setValidationMessage('This field can only contain numbers')
    //     }
    //     else if (value < 25000) {
    //         setValidationMessage('The value inserted has to be above 25000')
    //     }
    //     else{
    //         setValidationMessage('')
    //     }
    //     handleInput(e)
    // };
    return (
    <>
        <div className="col-12 d-flex justify-content-between">
            <div className="col-4 d-flex flex-lg-wrap justify-content-lg-start">
                <h4>Your expected salary:
                </h4>
                <p>Anual income after tax</p>
            </div>
            <div className="col-6 d-flex flex-lg-wrap justify-content-lg-end" >
                <InputBox onInput={handleInput}/>
                <div className="col-6 ps-4 mt-0 me-3 text-danger">{error}</div>
            </div>
        </div>
    </>
    )
}
export default ExpectedSalary