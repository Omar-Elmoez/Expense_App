/* eslint-disable react/prop-types */
export default function ExpenseDate({date}) {
  
  const month = date.toLocaleString("default", { month: "long" });
  const year = date.getFullYear();
  const day = date.toLocaleString("default", { day: "numeric" });

  return (
    <div>
      <div>{month}</div>
      <div>{year}</div>
      <div>{day}</div>
    </div>
  );
}
