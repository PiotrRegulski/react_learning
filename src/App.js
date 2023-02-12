import NewExpenses from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/expenses";
const App=()=> {
  
  return (
    <div>
      <h1>Let's get started!</h1>
      <NewExpenses />
      <Expenses />
      
    </div>
  );
}

export default App;
