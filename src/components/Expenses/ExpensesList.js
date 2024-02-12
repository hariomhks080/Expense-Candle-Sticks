import React from "react";
import ExpenseItem from "./ExpenseItem";
import './ExpenesesList.css'
const ExpensesList=(props)=>{
    
      if(props.items.length==0)
      {
        return <h2 className='expenses-list__fallback'>Found No Expense</h2>
      }
      else if (props.items.length==1)
      {
        
        return (<ul className="expenses-list">
        { props.items.map((expense) =>( 
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          ></ExpenseItem>)
        
        )} <h2 className='expenses-list__fallback' >Only One Expense Here</h2>
          
        </ul>)
        
      }
    
        return (<ul className="expenses-list">
        { props.items.map((expense) =>( 
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
            location={expense.location}
          ></ExpenseItem>)
        
        )} 

        </ul>)
}
export default ExpensesList;