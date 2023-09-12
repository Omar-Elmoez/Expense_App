/* eslint-disable react/prop-types */
import { nanoid } from "nanoid";
import ExpenseForm from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";

export default function NewExpense({onAddExpense}) {

  function savingDataHandler(interedValues) {
    const expenseData = {
      ...interedValues,
      id: nanoid()
    }
    onAddExpense(expenseData);
  }

  return <div className="new-expense">
    <ExpenseForm onSavingData={savingDataHandler} />
  </div>;
}
