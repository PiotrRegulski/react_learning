import React, { useState } from "react";
import "./expenses.css";
import ExpItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../Ui/Card";


export default function Expenses(props) {
  const [defaultyear, setDefaultYear] = useState("2021");

  const filterChangeHandler = (selectedyear) => {
    setDefaultYear(selectedyear);
    console.log(selectedyear);
  };

  const filteredExpenses = props.wydatki.filter(wydatki=>{
    return wydatki.date.getFullYear().toString() === defaultyear;
  });
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={defaultyear}
          onChangeFilter={filterChangeHandler}
        />
        {filteredExpenses.map((exp) => (
          <ExpItem
            key={exp.id}
            title={exp.title}
            amount={exp.amount}
            date={exp.date}
            lala={exp.lala}// my test
          />
        ))}
        ;
      </Card>
    </div>
  );
}
