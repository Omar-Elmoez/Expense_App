import Card from "../Card/Card";
/* eslint-disable react/prop-types */
import "./ExpenseDate.css";
export default function ExpenseDate({ date }) {
  const expensedate = new Date(date);
  const month = expensedate.toLocaleString("default", { month: "long" });
  const year = expensedate.getFullYear();
  const day = expensedate.toLocaleString("default", { day: "numeric" });

  return (
    <Card className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </Card>
  );
}

