import InputBox from "../InputBox"

const MonthlyRepayment = ({handleInput}) => {
    return (
        <>
            <div className="col-12 border-bottom d-flex justify-content-between">
                <div className="col-6 justify-content-lg-start">
                    <h4>Monthly repayment percentage: 
                    </h4>
                    <p>Must be between 10-100%</p>
                </div>
                <div className="col-6 d-flex justify-content-lg-end">
                    <InputBox onInput={handleInput}/>
                </div>
            </div>
        </>
    )
}
export default MonthlyRepayment