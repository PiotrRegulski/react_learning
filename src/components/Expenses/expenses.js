import './expenses.css';
import ExpItem from './ExpenseItem';
const expenses = [
    { title: "Car Insurance", amount: 294.34, date: new Date(2023, 2, 7) },
    { title: "Electricity Bill", amount: 280.99, date: new Date(2023, 1, 1) },
    { title: "City ​​Card", amount: 110.99, date: new Date(2022, 9, 3) },
    {
      title: "Bill For The Internet",
      amount: 120.99,
      date: new Date(Date.UTC(2012, 11, 20, 3, 0, 0)),
    },
    {
      title: "Phone Bill",
      amount: 150.01,
      date: new Date(Date.UTC(2022,10,12)),
    },
  ];
export default function Expenses(props){
    return(  <div className='expenses'>
        <ExpItem
          title={expenses[0].title}
          amount={expenses[0].amount}
          date={expenses[0].date}
        ></ExpItem>
        <ExpItem
          title={expenses[1].title}
          amount={expenses[1].amount}
          date={expenses[1].date}
        ></ExpItem>
        <ExpItem
          title={expenses[2].title}
          amount={expenses[2].amount}
          date={expenses[2].date}
        ></ExpItem>
        <ExpItem
          title={expenses[3].title}
          amount={expenses[3].amount}
          date={expenses[3].date}
        ></ExpItem>
        <ExpItem
          title={expenses[4].title}
          amount={expenses[4].amount}
          date={expenses[4].date}
        ></ExpItem>
      </div>
     

    );
}