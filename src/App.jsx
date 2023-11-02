
import { useState } from "react"
import AmountToBorrow from "./Components/AmountsBorrow"
import AmountsTags from "./Components/AmountsTags"
import Description from "./Components/Description"
import ExpectedSalary from "./Components/ExpectedSalary"
import MonthlyRepayment from "./Components/MonthlyRepayment"
import SubmitButton from "./Components/SubmitBtn"



function App() {

  const [amountsBorrow, setAmountsBorrow] = useState('')
  const [expectedSalary, setExpectedSalary] = useState('')
  const [monthlyRepayment, setMonthlyRepayment] = useState('')
  const [monthlyAmount, setMonthlyAmount] = useState(0)
  const [monthsToRepay,setMonthsToRepay] = useState(0)
  const [showDiv, setShowDiv] = useState(false)
  const [amountsBorrowError, setAmountsBorrowError] = useState('')
  const [annualIncomeError, setAnnualIncomeError] = useState('')

  const handleInputAmountsBorrow = (e) => {
       setAmountsBorrow(e.target.value)
  }

  const handleInputExpectedSalary = (e) => {
      setExpectedSalary(e.target.value)
  }

  const handleInputMonthlyRepayment = (e) => {
      setMonthlyRepayment(e.target.value)
  }

  const handleClick = (e) => {
    setAmountsBorrowError("");
    setAnnualIncomeError("");

      if(amountsBorrow < 1 || amountsBorrow > 10000)
      {
          setAmountsBorrowError('The value has to be between 1 to 10000')
      } else {
          setAmountsBorrowError('')
      }
      if(expectedSalary < 25000) {
          setAnnualIncomeError('This field can only accept values greater than 25000')
      } else {
          setAnnualIncomeError('')
      }
    if(!amountsBorrowError && !annualIncomeError) {
        let monthlyRepaymentAmount = (expectedSalary / 12) * (monthlyRepayment / 100)
        setMonthlyAmount(Math.floor(monthlyRepaymentAmount))
        setMonthsToRepay(Math.floor(amountsBorrow / monthlyRepaymentAmount))
        setShowDiv(true)
    }
};
    // const handleChange = (e) => {
    //   const value = e.target.value;
    //   const onlyNumbers = /^[0-9\b]+$/;
    //   setAmountsBorrowError('');
    //   setAnnualIncomeError('');
    //   setError('');
    //   if(!value.match(onlyNumbers)){
    //       setError('This field can only contain numbers')
    //   }
    //   else if (value < 1 || value > 10000) {
    //     setAmountsBorrowError('The value inserted has to be between 1 to 10000')
    //   }
    //   else if (expectedSalary < 25000 ) {
    //       setAnnualIncomeError("This field can only accept values greater than 25000")
    //   }
    // }

const SubmitButton = ({handleClick}) => {
  return (
      <div onClick={handleClick}  className="row w-50 d-flex justify-content-center">
          <button className="col-12 w-25 m-3">Submit</button>
      </div>
  )
}

  return (
    <div className="container">
      <div className="row border-bottom m-3">
        <Description/>
      </div>
      <div className="row border-bottom m-3">
        <AmountToBorrow handleInput={handleInputAmountsBorrow} error={amountsBorrowError} />
        <ExpectedSalary handleInput={handleInputExpectedSalary} error={annualIncomeError} />
        <MonthlyRepayment handleInput={handleInputMonthlyRepayment}/>
        <div className="d-flex justify-content-center">
        <SubmitButton handleClick={handleClick}/>
        </div>
        {showDiv && <AmountsTags monthlyAmount={monthlyAmount} monthsToRepay={monthsToRepay} amountsBorrow={amountsBorrow} />}
      </div>
    </div>
  )

}
export default App
