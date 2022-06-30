
import "./App.css";
import ExpenseItem from "./Expenses/ExpenseItem";
import NewExpense from "./components/NewExpenses/NewExpense";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Medicine",
      amount: 294.67,
      date: new Date(2020, 12, 24),
    },
    {
      id: "e2",
      title: "car insurance",
      amount: 394.67,
      date: new Date(2019, 8, 18),
    },
    {
      id: "e3",
      title: "Tutions",
      amount: 500,
      date: new Date(2022, 4, 28),
    },
    {
      id: "e4",
      title: "Food",
      amount: 230,
      date: new Date(2020, 4, 2),
    },
  ];
  const addExpenseHandler= expense=>{
    console.log('In App.js');
    confirm.log(expenses)
  }
  return (
    <div>
      <NewExpense/>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
