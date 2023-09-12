/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

export default function Expenses({ info }) {
  const [selectedYear, setSelectedYear] = useState('2020');

  function selectedYearHandler(year) {
    setSelectedYear(year);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter defaultYear={selectedYear} onChangeFilter={selectedYearHandler} />
      <ExpenseItem {...info[0]} />
      <ExpenseItem {...info[1]} />
      <ExpenseItem {...info[2]} />
      <ExpenseItem {...info[3]} />
    </Card>
  );
}
