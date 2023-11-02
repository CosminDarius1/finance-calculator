const SubmitButton = ({handleClick,showDiv}) => {
    return (
        <div onClick={handleClick} className="row w-50 d-flex justify-content-center">
             {/* <button className="col-12 w-25 m-3">Submit</button>
                {showDiv && <AmountsTags monthlyAmount={monthlyAmount} monthsToRepay={monthsToRepay} amountsBorrow={amountsBorrow} />} */}
        </div>
    )
}
export default SubmitButton