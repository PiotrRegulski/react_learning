import NewExpenses  from "./components/NewExpense/NewExpense";
import Expenses, {addExpenseHandler}from "./components/Expenses/expenses";

const App=()=> {
  const expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 294.34,
      date: new Date(2023, 2, 7),
    },
    {
      id: "e2",
      title: "Electricity Bill",
      amount: 280.99,
      date: new Date(2023, 1, 1),
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
  
  return (
    <div>
      
      <NewExpenses onAddExpense={addExpenseHandler} />
      
      <Expenses items={expenses} />
      
    </div>
  );
}

export default App;
