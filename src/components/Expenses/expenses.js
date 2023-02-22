import React, { useState } from "react";
import "./expenses.css";
import ExpItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../Ui/Card";

export function addExpenseHandler(expense) {
  console.log("add js");
  console.log(expense);
}
export default function Expenses(props) {
  const [defaultyear, setDefaultYear] = useState("2021");

  const filterChangeHandler = (selectedyear) => {
    setDefaultYear(selectedyear);
    console.log(selectedyear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={defaultyear}
          onChangeFilter={filterChangeHandler}
        />
        {props.items.map((expenses) => (
          <ExpItem
            title={expenses.title}
            amount={expenses.amount}
            date={expenses.date}
          />
        ))}
        ;
      </Card>
    </div>
  );
}
