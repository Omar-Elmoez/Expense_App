/* eslint-disable react/prop-types */
import { useState } from 'react';
import Card from "../Card/Card";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";


export default function ExpenseItem({title, amount, date}) {
  
  const [price, setPrice] = useState(amount)
  function clickHandler() {
    setPrice(prev => prev - 15);
  }

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${price}</div>
        <button onClick={clickHandler}>Apply Discount</button>
      </div>
    </Card>
  );
}
