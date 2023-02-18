import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../Ui/Card";

const ExpItem=(props)=> {
  const [zmiana, setZmiana] = useState(props.title);
  
  const clickHandler = () => {
    setZmiana(props.title);
    console.log(props.date);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />

      <div className="expense-item__description">
        <h2>{zmiana}</h2>
      </div>
      <div className="expense-item__price">{props.amount}zł</div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpItem;
