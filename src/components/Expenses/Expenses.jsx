/* eslint-disable react/prop-types */
import { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import "./Expenses.css";

export default function Expenses({ items }) {
  const [selectedYear, setSelectedYear] = useState();
  const [showFilteredItems, setShowFilteredItems] = useState(false);
  
  const filteredItems = items.filter(
    (item) => new Date(item.date).getFullYear() === +selectedYear
  );

  function selectedYearHandler(year) {
    setSelectedYear(year);
    if (year === "-- All --") {
      setShowFilteredItems(false);
    } else {
      setShowFilteredItems(true);
    }
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        defaultYear={selectedYear}
        onChangeFilter={selectedYearHandler}
      />
      {showFilteredItems && filteredItems.length === 0 && <p className="expenses__msg">No Expenses Found.</p>}
      {showFilteredItems
        ? filteredItems.map((item) => <ExpenseItem {...item} key={item.id} />)
        : items.map((item) => <ExpenseItem {...item} key={item.id} />)}
    </Card>
  );
}
