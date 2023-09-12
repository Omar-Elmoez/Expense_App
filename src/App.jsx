import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpernse/NewExpense";

export default function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 8, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  function addExpenseHandler(expense) {
    console.log('From App:',expense);
  }

  return (
    <div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses info={expenses} />
    </div>
  );
}
