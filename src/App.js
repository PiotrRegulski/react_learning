import React, { useState } from "react";

import NewExpenses from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/expenses";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Car Insurance",
    amount: 294.34,
    date: new Date(2023, 2, 7),
    lala: "console",
  },
  {
    id: "e2",
    title: "Electricity Bill",
    amount: 280.99,
    date: new Date(2023, 1, 1),
    lala: "12234",
  },
  {
    id: "e3",
    title: "City ​​Card",
    amount: 110.99,
    date: new Date(2021, 9, 3),
  },
  {
    id: "e4",
    title: "Bill For The Internet",
    amount: 120.99,
    date: new Date(Date.UTC(2020, 11, 20, 3, 0, 0)),
  },
  {
    id: "e5",
    title: "Phone Bill",
    amount: 150.01,
    date: new Date(Date.UTC(2022, 10, 12)),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  function addExpenseHandler(expense) {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />

      <Expenses wydatki={expenses} />
    </div>
  );
};

export default App;
