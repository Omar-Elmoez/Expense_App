/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";

export default function NewExpense({ onAddExpense }) {
  const [addExpense, setAddExpense] = useState(false);

  function savingDataHandler(interedValues) {
    const expenseData = {
      ...interedValues,
      id: nanoid(),
    };
    onAddExpense(expenseData);
  }

  function addExpenseHandler() {
    setAddExpense((prevState) => !prevState);
  }

  return (
    <div className="new-expense">
      {addExpense ? (
        <ExpenseForm onSavingData={savingDataHandler} onAddExpense={addExpenseHandler} />
      ) : (
        <button onClick={addExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
}
