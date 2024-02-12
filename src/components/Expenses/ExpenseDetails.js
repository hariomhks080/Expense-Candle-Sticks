import './ExpenseDate.css'
const ExpenseDetails= (props)=>{
    return(
        <div className='expense-date'>
      <div className='expense-date__month'>{props.title}</div>
      <div className='expense-date__day'>{props.amount}</div>
      <div className='expense-date__year '>{props.location}</div>
  </div>
        
    )
}
export default ExpenseDetails;