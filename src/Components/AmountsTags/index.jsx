import './AmountTags.css'

const AmountsTags = ({monthlyAmount,monthsToRepay,amountsBorrow}) => {

    return (
        <div className="row bg-info py-2 ms-4">
            <h3>Loan amount is {amountsBorrow} and the sum per month will be {monthlyAmount}  which will take {monthsToRepay} months</h3>
       </div>
    )
}

export default AmountsTags

