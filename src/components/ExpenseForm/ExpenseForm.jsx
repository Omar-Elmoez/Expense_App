import { useState } from "react";
import "./ExpenseForm.css";
export default function ExpenseForm() {
  const [enteredValues, setEnteredValues] = useState({
    title: "",
    price: "",
    date: "",
  });

  const changeHandler = (e) => {
    setEnteredValues((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(enteredValues);
    setEnteredValues({
      title: "",
      price: "",
      date: "",
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            onChange={changeHandler}
            name="title"
            value={enteredValues.title}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="price">Price</label>
          <input
            type="number"
            min="0"
            id="pirce"
            onChange={changeHandler}
            name="price"
            value={enteredValues.price}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2030-12-30"
            id="date"
            onChange={changeHandler}
            name="date"
            value={enteredValues.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
