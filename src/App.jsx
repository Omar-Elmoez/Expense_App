import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpernse/NewExpense";

export default function App() {
  const [expenses, setExpenses] = useState([]);

  function addExpenseHandler(expense) {
    setExpenses(prevState => [...prevState, expense]);
  }

  return (
    <div>
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}
