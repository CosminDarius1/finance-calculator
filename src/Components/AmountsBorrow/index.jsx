import InputBox from "../InputBox"
import {useState} from "react";

const AmountToBorrow = ({handleInput, error}) => {
    // const[validationMessage, setValidationMessage] = useState('')

    // const handleChange = (e) => {
    //   const value = e.target.value;
    //   const onlyNumbers = /^[0-9\b]+$/;
    //   if(!value.match(onlyNumbers)){
    //       setValidationMessage('This field can only contain numbers')
    //   }
    //   else if (value < 1 || value > 10000) {
    //     setValidationMessage('The value inserted has to be between 1 to 10000')
    //   }
    //   else{
    //       setValidationMessage('')
    //   }
    //   handleInput(e)
    // };
    return (
        <>
            <div className="col-12 d-flex justify-content-between">
                <div className="col-6 d-flex flex-lg-wrap justify-content-lg-start">
                    <h4>The amount you would like to borrow to pay for your course:
                    </h4>
                    <p>Must be between £1-100000</p>
                </div>
                <div className="col-6 d-flex flex-lg-wrap justify-content-lg-end">
                    <InputBox onInput={handleInput}/>
                    <div className="col-6 ps-4 mt-0 me-3 text-danger">{error}</div>
                </div>
            </div>
        </>
    );
}
export default AmountToBorrow