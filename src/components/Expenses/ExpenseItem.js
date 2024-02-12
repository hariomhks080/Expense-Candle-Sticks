import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItem.css";
import Card from "../UI/Card";

const ExpenseItem = (props) => {
  let [title, settitle] = useState(props.title);
  let [amount, setamount] = useState(props.amount);
  const changehandler = () => {
    settitle("updated");
  };
  const deletehandler = () => {
    let deletet = document.querySelector(".tiger");
    let div = document.querySelector(".expense-item");

    deletet.removeChild(div);
  };
  const expensehandler = () => {
    setamount(100);
  };

  return (
    <div className="tiger">
      <li><Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${amount}</div>
          {/* <button onClick={expensehandler}>ExpenseAmountUpadated</button> */}
          <ExpenseDetails
            amount={amount}
            title={title}
            location={props.location}
          ></ExpenseDetails>
          {/* <button onClick={changehandler}>Change Title</button>
          <button onClick={deletehandler}>Delete Expense</button> */}
        </div>
      </Card></li>
    </div>
  );
};
export default ExpenseItem;
