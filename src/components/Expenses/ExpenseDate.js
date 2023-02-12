import React from 'react';

import './ExpenseData.css'
// funkcja strzałkowa można używać
const ExpenseDate=(props)=> {
  const month = props.date.toLocaleString("pl-PL", { month: "long" });
  const day = props.date.toLocaleString("pl-PL", { day: "2-digit" });
  const year = props.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}

export default ExpenseDate;
