import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const date=[]
  for(var i=0;i<10;i++){
    date.push(new Date().getFullYear()-i)
  }
  const dropdownChangeHandler=(event)=>{
    props.onchangefilter(event.target.value);
  };
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {
            date.map(date=>(
              <option key={date} value={date}>{date}</option>
            ))
          }
        
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;