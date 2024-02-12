import React,{useState} from "react";
import './NewExpense.css'
import ExpenseForm from "./ExpenseForm";
const NewExpense=(props)=>{
    const [isediting,setediting]=useState(false)
    const saveExpenseDataHandler=(enterExpenseData)=>{
        const expenseData={
            ...enterExpenseData,
            id:Math.random().toString()
        }
        props.onAddExpense(expenseData);
        setediting(false)
    }
    const starteditinghandler=()=>{
        setediting(true)
    }
    const stopeditinghandler=()=>{
        setediting(false)
    }
    return(
        <div className="new-expense">
            {!isediting && <button onClick={starteditinghandler}>Add New Expense</button>}
        {isediting && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopeditinghandler}></ExpenseForm>}
        </div>
   
    )
}
export default NewExpense;