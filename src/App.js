import logo from "./logo.svg";
import "./App.css";
import Expeneses from "./components/Expenses/Expeneses";
import React, { useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
  const Dummy_Expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "kanpur",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "kushinagar",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "lucknow",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "jaipur",
    },
  ];

  const [expenses, setExpenses] = useState(Dummy_Expenses);

  /*<div className="App">
     /* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          let get started
        </a>
        <ExpenseItem></ExpenseItem>
      </header>
     
    </div>*/

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
      <Expeneses item={expenses}></Expeneses>
    </div>
  );

  /*return React.createElement(
    "div",
    {},
    React.createElement(
      "h2",
      {},
      "Let's get started!"),
      React.createElement(Expeneses, { item: expenses })
      
  );*/
};

export default App;
