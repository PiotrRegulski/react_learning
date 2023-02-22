import React from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../Ui/Card";

const ExpItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <h3>{props.lala}</h3> 
      </div>
      <div className="expense-item__price">{props.amount}zł</div>
    </Card>
  );
};

export default ExpItem;
