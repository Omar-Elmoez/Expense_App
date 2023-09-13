/* eslint-disable react/prop-types */
import "./ExpensesFilter.css";

export default function ExpensesFilter({onChangeFilter, defaultYear}) {

  function filterChangeHandler(e) {
    onChangeFilter(e.target.value);
  }

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={defaultYear} onChange={filterChangeHandler}>
          <option>-- All --</option>
          <option>2022</option>
          <option>2021</option>
          <option>2020</option>
          <option>2019</option>
        </select>
      </div>
    </div>
  );
}
